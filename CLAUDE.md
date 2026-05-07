# PT. Kola Borasi Indonesia (KOBOI) - Web Application Guidelines

## 🏢 Project Overview
Website company profile dan katalog e-commerce B2B B2C untuk **PT. Kola Borasi Indonesia** (Distributor FMCG Nusantara). Website ini dirancang dengan konsep **"3D Portal Imersif"**, memberikan pengalaman mewah, dinamis, dan futuristik saat diakses oleh calon mitra atau klien.

## 💻 Tech Stack
- **Struktur**: Vanilla HTML5
- **Gaya (Styling)**: Vanilla CSS3 (Custom Variables, CSS Grid/Flexbox, Glassmorphism, Dark Mode)
- **Logika**: Vanilla JavaScript (ES6+)
- **Animasi Utama**: GSAP & ScrollTrigger (untuk efek parallax, 3D scroll, dan entrance animations).
- **Ikon**: FontAwesome 5.15.4

## 📂 Struktur Direktori & File Utama
- `index.html` : Halaman utama (Landing Page). Dilengkapi SEO Meta, Open Graph, Favicon, dan Analytics.
- `katalog.html` : Halaman katalog e-commerce. Dilengkapi SEO Meta, Open Graph, Favicon, dan Analytics.
- `style.css` : File CSS tunggal untuk seluruh aplikasi.
- `script.js` : Logika animasi portal, tema, dan interaksi landing page.
- `katalog.js` : Database produk utama (array JS) dan logika filter katalog.
- `data_private/` : Folder aman berisi data master (CSV/JSON) yang tidak dipublish langsung ke internet.
- `scratch/` : Folder script otomatisasi pemrosesan data.

## 🎨 Konvensi Desain & Animasi (The "3D Portal" Theme)
Setiap penambahan fitur atau *styling* baru **wajib** mengikuti pedoman ini:
1. **Aesthetic Pertama**: Jangan pernah membuat komponen yang terlihat kaku atau "datar" (flat). Selalu gunakan bayangan halus (`box-shadow`), efek kaca (`backdrop-filter: blur`), dan transisi.
2. **Animasi Z-Axis**: Elemen yang muncul saat di-*scroll* harus memiliki kedalaman (Z-Axis). Contoh penggunaan `gsap.fromTo` dengan parameter `z: -200`.
3. **Parallax Background**: Latar belakang aplikasi menggunakan bulatan abstrak yang bergerak merespons gulungan layar (Parallax Orbs). Jangan hapus elemen `.parallax-bg`.
4. **Warna Identitas (Brand Guidelines)**:
   - Primary: `#F97316` (Orange)
   - Secondary: `#3B82F6` (Blue)
   - Dark Background: `#0f172a` (Slate 900)

## ⚠️ Aturan Z-Index Hierarki (Penting!)
Sistem berlapis ini sangat penting untuk menjaga interaksi pengguna:
- `z-index: 9999` -> Preloader / Splash Screen
- `z-index: 3000` -> Quick Order Portal Card (Panel Belanja Melayang)
- `z-index: 2500` -> Portal Toggle Button (Tombol Bulat Pembuka Portal)
- `z-index: 1000` -> Navbar (Header)
- `z-index: 10`   -> Product Badge (Stiker Promo pada Kartu Produk)
- `z-index: -1`   -> Parallax Background Orbs

## 🚀 Cara Menjalankan Aplikasi
Proyek ini tidak membutuhkan proses *build* (seperti Webpack atau Vite).
- Gunakan ekstensi **Live Server** di VS Code (klik kanan `index.html` -> *Open with Live Server*).
- Atau jalankan HTTP server sederhana melalui terminal: `python3 -m http.server 5500`.
- **Note untuk Live Server**: Selalu pastikan Anda membuka/menargetkan *folder* root `kolaborasi.indonesia` di VS Code, bukan *folder* luarnya, agar *path* aset (CSS, Images, JS) terbaca sempurna.

## 📝 Manajemen Data Produk
- Data master produk (800+ SKU) berada di array `ecommerceProducts` di dalam file `katalog.js`.
- Semua modifikasi nama gambar gambar, harga, dan rating dilakukan di sana.
- Jangan menyisipkan *string* gambar asli di dalam fungsi `onerror` pada HTML. Biarkan `placehold.co` menjadi *fallback default* jika gambar asli (di folder `images/catalog/products/`) belum diunduh.
