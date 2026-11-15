use std::error::Error;
use std::fs;
use std::path::Path;

const START: &str = "<!-- TREE:START -->";
const END: &str = "<!-- TREE:END -->";
const IGNORE: &[&str] = &[
    ".git",
    "node_modules",
    "__pycache__",
    ".venv",
    "dist",
    "build",
    "target",
    ".github",
];
const MAX_DEPTH: usize = 3;

fn tree(path: &Path, prefix: &str, depth: usize) -> Vec<String> {
    if depth >= MAX_DEPTH {
        return Vec::new();
    }

    let Ok(read_dir) = fs::read_dir(path) else {
        return Vec::new();
    };

    // (nama, is_dir)
    let mut entries: Vec<(String, bool)> = read_dir
        .filter_map(|e| e.ok())
        .map(|e| {
            let name = e.file_name().to_string_lossy().into_owned();
            let is_dir = e.path().is_dir();
            (name, is_dir)
        })
        .filter(|(name, _)| !IGNORE.contains(&name.as_str()))
        .collect();

    // folder dulu, lalu urut nama tanpa peduli huruf besar/kecil
    entries.sort_by_key(|(name, is_dir)| (!*is_dir, name.to_lowercase()));

    let mut lines = Vec::new();
    let total = entries.len();
    for (i, (name, is_dir)) in entries.iter().enumerate() {
        let last = i == total - 1;
        let branch = if last { "└── " } else { "├── " };
        let suffix = if *is_dir { "/" } else { "" };
        lines.push(format!("{prefix}{branch}{name}{suffix}"));

        if *is_dir {
            let child_prefix = format!("{prefix}{}", if last { "    " } else { "│   " });
            lines.extend(tree(&path.join(name), &child_prefix, depth + 1));
        }
    }
    lines
}

fn main() -> Result<(), Box<dyn Error>> {
    let cwd = std::env::current_dir()?;
    let root = cwd
        .file_name()
        .map(|n| n.to_string_lossy().into_owned())
        .unwrap_or_default();

    let block = format!(
        "```\n{root}/\n{}\n```",
        tree(Path::new("."), "", 0).join("\n")
    );

    let readme = fs::read_to_string("README.md")?;

    // ganti semua blok START ... END
    let mut out = String::with_capacity(readme.len());
    let mut rest = readme.as_str();
    while let Some(s) = rest.find(START) {
        let after = s + START.len();
        match rest[after..].find(END) {
            Some(e) => {
                out.push_str(&rest[..s]);
                out.push_str(&format!("{START}\n{block}\n{END}"));
                rest = &rest[after + e + END.len()..];
            }
            None => break,
        }
    }
    out.push_str(rest);

    if out != readme {
        fs::write("README.md", out)?;
    }
    Ok(())
}
