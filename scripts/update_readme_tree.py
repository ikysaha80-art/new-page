import os, re

START, END = "<!-- TREE:START -->", "<!-- TREE:END -->"
IGNORE = {".git", "node_modules", "__pycache__", ".venv", "dist", "build", "scripts", ".github"}
MAX_DEPTH = 3

def tree(path, prefix="", depth=0):
    if depth >= MAX_DEPTH:
        return []
    names = [n for n in os.listdir(path) if n not in IGNORE]
    names.sort(key=lambda n: (not os.path.isdir(os.path.join(path, n)), n.lower()))
    lines = []
    for i, name in enumerate(names):
        last = i == len(names) - 1
        full = os.path.join(path, name)
        is_dir = os.path.isdir(full)
        lines.append(f"{prefix}{'└── ' if last else '├── '}{name}{'/' if is_dir else ''}")
        if is_dir:
            lines += tree(full, prefix + ("    " if last else "│   "), depth + 1)
    return lines

root = os.path.basename(os.getcwd())
block = "```\n" + root + "/\n" + "\n".join(tree(".")) + "\n```"

with open("README.md", encoding="utf-8") as f:
    readme = f.read()

pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.S)
new = pattern.sub(lambda m: f"{START}\n{block}\n{END}", readme)

if new != readme:
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(new)
