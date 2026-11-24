<div align="center">

# 📄 a-new-page

**Halaman baru, awal baru: catatan belajar HTML & JavaScript dari nol.**

![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-belajar-blue)
![Made with love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)

[Tentang](#-tentang) •
[Tujuan](#-tujuan) •
[Teknologi](#-teknologi) •
[Struktur](#-struktur-repositori) •
[Instalasi](#-instalasi) •
[Menjalankan](#-cara-menjalankan) •
[FAQ](#-faq) •
[Kontribusi](#-berkontribusi)

</div>

---

## ✨ Tentang

**a-new-page** adalah jurnal belajar saya di dunia web development. Nama ini dipilih karena setiap perjalanan dimulai dari satu halaman kosong, dan repositori ini adalah halaman pertama saya.

Di dalamnya ada latihan-latihan kecil yang dikelompokkan per bahasa dan per topik. Setiap file dibuat untuk memahami satu konsep saja, supaya mudah dibaca ulang kapan pun saya lupa.

> *"Tidak harus hebat untuk memulai, tapi harus memulai untuk menjadi hebat."*

## 🎯 Tujuan

- **Membangun fondasi** yang kuat sebelum melangkah ke topik yang lebih rumit.
- **Mendokumentasikan proses belajar** agar kemajuan terlihat nyata dari waktu ke waktu.
- **Membiasakan diri menggunakan Git dan GitHub** lewat commit yang rutin.
- **Menjadi referensi pribadi** yang bisa dibuka kembali saat dibutuhkan.
- **Berbagi dengan sesama pembelajar** yang mungkin sedang berada di tahap yang sama.

## 🧰 Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Membangun struktur halaman web |
| **CSS** | Memperindah halaman web |
| **JavaScript** | Menambahkan logika dan interaksi |
| **Git & GitHub** | Version control dan penyimpanan kode |
| **Visual Studio Code** | Editor kode yang digunakan |

## 📁 Struktur Repositori

Repositori ini disusun berdasarkan **bahasa → kategori → topik**, sehingga mudah ditelusuri.

<!-- TREE:START -->
```
new-page/
├── language/
│   ├── HTML/
│   │   ├── dasar/
│   │   └── 1.formatting.html
│   └── JavaScript/
│       ├── 1.if conditions/
│       └── 2.loops/
└── README.md
```
<!-- TREE:END -->

### Penjelasan singkat

- **`language/`** adalah folder utama yang menampung semua bahasa pemrograman yang sedang dipelajari.
- **`language/HTML/`** berisi latihan seputar HTML.
- **`language/JavaScript/`** berisi latihan JavaScript.
- **`LICENSE`** berisi ketentuan penggunaan repositori ini.
- **`README.md`** adalah halaman yang sedang kamu baca.

### Aturan penamaan

Agar rapi dan berurutan, file dan folder diberi nomor di depannya dan ditulis dengan huruf kecil:

```
1. nama topik
2. nama topik berikutnya
3. dan seterusnya
```

Dengan begitu urutan belajar tetap terjaga saat file ditampilkan di GitHub maupun di editor.

## 📋 Prasyarat

Tidak ada yang rumit. Kamu hanya membutuhkan:

- Sebuah **browser modern** (Chrome, Firefox, Edge, atau Safari)
- Sebuah **editor teks** (disarankan [Visual Studio Code](https://code.visualstudio.com/))
- **Git**, jika ingin meng-clone repositori ini ([unduh di sini](https://git-scm.com/downloads))
- **Node.js**, *opsional*, jika ingin menjalankan file JavaScript lewat terminal ([unduh di sini](https://nodejs.org/))

## 📦 Instalasi

```bash
# 1. Clone repositori
git clone https://github.com/ikysaha80-art/a-new-page.git

# 2. Masuk ke folder proyek
cd a-new-page
```

Atau, jika tidak memakai Git, klik tombol hijau **Code → Download ZIP** di halaman repositori, lalu ekstrak.

## 🚀 Cara Menjalankan

### Menjalankan file HTML

Cara paling mudah adalah membuka file `.html` langsung di browser:

1. Buka folder `language/HTML/dasar/`
2. Klik dua kali pada file yang ingin dilihat
3. Halaman akan terbuka di browser bawaan kamu

Jika memakai VS Code, kamu juga bisa memasang ekstensi **Live Server** agar halaman otomatis ter-refresh setiap kali kode disimpan.

### Menjalankan file JavaScript

Ada dua cara:

**Lewat Node.js (terminal)**

```bash
node nama-file.js
```

**Lewat browser (Console)**

1. Buka halaman HTML yang menyertakan file JavaScript
2. Tekan `F12` atau klik kanan lalu pilih **Inspect**
3. Buka tab **Console** untuk melihat hasilnya

## 💡 Tips Membaca Repositori Ini

- Telusuri folder **sesuai urutan nomor**, karena materi disusun dari yang paling mendasar.
- **Ubah dan coba sendiri** kodenya. Mengubah satu nilai lalu melihat hasilnya adalah cara belajar yang paling cepat.
- Gunakan fitur **History** di GitHub untuk melihat bagaimana kode berkembang dari waktu ke waktu.
- Jangan takut error. Pesan error adalah petunjuk, bukan hukuman.

## ❓ FAQ

**Apakah repositori ini cocok untuk pemula?**
Ya. Seluruh isinya dibuat dari sudut pandang orang yang sedang belajar, jadi kodenya sederhana dan fokus pada satu konsep per file.

**Apakah isinya akan bertambah?**
Ya. Repositori ini akan terus diperbarui seiring proses belajar berjalan.

**Bolehkah saya memakai kode di sini untuk belajar?**
Tentu. Silakan gunakan sesuai ketentuan pada berkas [`LICENSE`](LICENSE).

**Saya menemukan kesalahan, apa yang harus dilakukan?**
Buka sebuah [Issue](https://github.com/ikysaha80-art/a-new-page/issues) dan jelaskan temuanmu. Masukan sangat berarti.

## 🤝 Berkontribusi

Saran, koreksi, dan masukan sangat diterima. Cara berkontribusi:

1. **Fork** repositori ini
2. Buat branch baru
   ```bash
   git checkout -b perbaikan/nama-perbaikan
   ```
3. Lakukan perubahan, lalu commit
   ```bash
   git commit -m "Perbaiki penjelasan pada topik switch"
   ```
4. Push ke branch kamu
   ```bash
   git push origin perbaikan/nama-perbaikan
   ```
5. Buka **Pull Request**

## 📜 Lisensi

Repositori ini memiliki lisensi yang tercantum pada berkas [`LICENSE`](LICENSE). Silakan baca berkas tersebut untuk mengetahui apa yang boleh dan tidak boleh dilakukan.

## 👤 Penulis

**ikysaha80-art**

- GitHub: [@ikysaha80-art](https://github.com/ikysaha80-art)
- Repositori: [a-new-page](https://github.com/ikysaha80-art/a-new-page)

## 🙏 Ucapan Terima Kasih

- Komunitas open source yang selalu terbuka untuk berbagi ilmu
- Dokumentasi [MDN Web Docs](https://developer.mozilla.org/id/) sebagai rujukan belajar
- Semua orang yang pernah memberi masukan, sekecil apa pun

---

<div align="center">

**Setiap ahli pernah memulai dari halaman kosong.** ✍️

⭐ Jika repositori ini bermanfaat, jangan lupa beri bintang!

</div>
