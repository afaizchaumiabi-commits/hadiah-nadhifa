# Hadiah ulang tahun Nadhifa 🤍
Alur: index.html (web interaktif) -> lagu.html (About You, lalu Kita Usahakan Rumah Itu).

## Cara membuka
Upload seluruh folder ke Netlify / GitHub Pages / Vercel, atau lokal: python -m http.server lalu buka localhost:8000
(perlu internet untuk font dan ikon Google).

## Mengganti isi
- foto/f01.jpg ... : foto di tumpukan "Kenangan kita" dan gulungan lagu
- foto/L01-L10.jpg : foto 16:9 untuk bingkai puzzle di lagu pertama
- video/v01.mp4 ... : video di "Momen kecil kita"
- letter.txt : surat (satu baris = satu paragraf)
- chats_src.json + daftar `pk` di build.py : chat yang ditampilkan
Setelah mengubah apa pun, jalankan: python build.py
