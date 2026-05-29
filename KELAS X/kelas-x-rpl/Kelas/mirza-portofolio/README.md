# Mirza Portfolio & Mini-Apps

Selamat datang di repositori **Mirza Portfolio**. Proyek ini adalah sebuah aplikasi web *Full-Stack* berdesain modern (menggunakan estetika *Glassmorphism* dan animasi interaktif) yang berfungsi tidak hanya sebagai portofolio pribadi, tetapi juga menyertakan fungsionalitas Backend untuk manajemen konten (Admin Panel) dan aplikasi-mini interaktif.

---

## 📸 Fitur Utama

### 1. 🎨 Modern Portfolio Interface
- **Tampilan Dinamis:** Mengadopsi perpaduan warna yang elegan (Dark Mode) dengan *glowing effect* dan transisi animasi halus menggunakan `framer-motion`.
- **Bagian Lengkap:** Mencakup *Hero Section, About, Skills, Projects, Education,* dan *Contact*.
- **Responsive Design:** 100% didukung navigasi *Mobile-friendly*.

### 2. 🎮 Aplikasi Mini Edukatif Terintegrasi
Di dalam aplikasi ini, terdapat dua buah *mini-game* interaktif yang bisa langsung dimainkan:
- **Game Catur (Chess Game):** Permainan catur interaktif yang berjalan mulus di browser.
- **Kalkulator (Calculator):** Fitur alat bantu hitung yang terintegrasi di dalam portofolio.

### 3. 🔐 Sistem Autentikasi Mandiri
- **Registrasi & Login (API-Based):** Sistem masuk dan daftar yang diamankan menggunakan layanan **Laravel Sanctum**.
- **Profil Avatar Dinamis:** Saat user *login*, UI dinamis secara otomatis memanggil antarmuka profil menggunakan format Avatar ilustrasi dari *DiceBear*.
- **Admin Dashboard:** Halaman `/admin` yang diproteksi (**Private Route**) untuk memanajemen *portfolio* (merekap/menghitung proyek, kapabilitas *skills*, dan pesan masuk).

---

## 🛠 Teknologi yang Digunakan

Proyek ini dibangun menggunakan arsitektur pemisahan *Client-Server*:

### 🌐 Frontend (Folder `/frontend`)
- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS v4 + Glassmorphism UI
- **Routing:** React Router DOM (v7)
- **Komunikasi Data (HTTP):** Axios
- **Animasi:** Framer Motion

### ⚙️ Backend (Folder `/backend`)
- **Framework:** Laravel 11 (PHP ^8.2)
- **Database:** SQLite (`database.sqlite`) sangat ringan dan siap dijalankan tanpa server database pihak ke-3 tambahan.
- **Autentikasi API:** Laravel Sanctum (Token-based Authentications)

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

Membutuhkan **PHP 8.2+**, **Composer**, dan **Node.js** agar dapat dijalankan dengan baik.

### Tahap 1: Persiapan Backend (API Server)
Buka terminal/CMD lalu arahkan ke folder `backend`:
```bash
cd backend
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```
*Backend akan secara bawaan berjalan di alamat `http://127.0.0.1:8000`*

### Tahap 2: Persiapan Frontend (Client App)
Buka terminal/CMD baru, arahkan ke folder `frontend`:
```bash
cd frontend
npm install
npm run dev
```
*Frontend akan dapat diakses melalui browser pada `http://localhost:5173`*

---

## 📂 Struktur Direktori Utama

- `/backend/app/Http/Controllers/AuthController.php`: Mengelola *logic* autentikasi Login & Register.
- `/backend/routes/api.php`: Jalur akses Endpoint dari Backend.
- `/frontend/src/App.jsx`: Titik utama konfigurasi React (termasuk Routes *Home*, *Login*, *Register*, dan *ChessGame*).
- `/frontend/src/services/api.js`: File sentral untuk koneksi Axios yang menghubungkan Front-End ke Laravel.
- `/frontend/src/components/Navbar.jsx`: Komponen Navbar lengkap yang mengatur *routing* transisi tombol *Login* menjadi *Avatar Profile* saat aktif.

---
*Proyek ini diciptakan khusus untuk Tugas Kelas X-RPL oleh Mirza.*
