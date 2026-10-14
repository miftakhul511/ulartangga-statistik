// ============================================================
// BANK SOAL STATISTIKA KELAS XI - 100 SOAL
// Materi:
// 1. Data bivariat
// 2. Diagram pencar
// 3. Interpretasi hubungan
// 4. Regresi linear
// 5. Korelasi
//
// Nomor 1-45   : mudah
// Nomor 46-79  : sedang
// Nomor 80-100 : sulit
//
// Format setiap baris:
// [topik, soal, jawaban benar, pengecoh 1, pengecoh 2, pengecoh 3]
//
// Posisi pilihan diputar agar kunci tersebar merata di A-D.
// ============================================================

const bankStatistika = [

    // -------------------- MUDAH --------------------

    // Data bivariat

    [
        "Data bivariat",
        "Data yang memuat dua variabel dari setiap objek pengamatan disebut ....",
        "Data bivariat",
        "Data tunggal",
        "Data frekuensi",
        "Data acak"
    ],
    [
        "Data bivariat",
        "Pasangan variabel yang sesuai untuk menyelidiki hubungan belajar dan prestasi adalah ....",
        "Jam belajar dan nilai ujian",
        "Nama siswa dan nama guru",
        "Nomor kelas dan nama sekolah",
        "Nama buku dan warna sampul"
    ],
    [
        "Data bivariat",
        "Pada pasangan (X, Y) = (2, 65), nilai X adalah ....",
        "2", "65", "67", "63"
    ],
    [
        "Data bivariat",
        "Untuk memprediksi nilai ujian dari jam belajar, variabel prediktor X adalah ....",
        "Jam belajar",
        "Nilai ujian",
        "Nama siswa",
        "Nomor absen"
    ],
    [
        "Data bivariat",
        "Untuk memprediksi nilai ujian dari jam belajar, variabel respons Y adalah ....",
        "Nilai ujian",
        "Jam belajar",
        "Nama siswa",
        "Jumlah kelas"
    ],
    [
        "Data bivariat",
        "Setiap baris tabel data bivariat sebaiknya memuat ....",
        "X dan Y dari objek atau pengamatan yang sama",
        "X dan Y dari dua orang berbeda secara acak",
        "Hanya nilai X",
        "Hanya nilai Y"
    ],
    [
        "Data bivariat",
        "Satuan yang tepat untuk variabel durasi belajar adalah ....",
        "Jam", "Sentimeter", "Kilogram", "Rupiah"
    ],
    [
        "Data bivariat",
        "Sepuluh siswa masing-masing dicatat jam belajar dan nilainya. Banyak pasangan data adalah ....",
        "10", "5", "20", "100"
    ],
    [
        "Data bivariat",
        "Cara memperoleh data tinggi badan dan rentang lengan adalah ....",
        "Mengukur keduanya pada setiap orang",
        "Menebak tinggi seluruh orang",
        "Mengambil tinggi satu orang dan lengan orang lain",
        "Mengisi semua data dengan angka sama"
    ],

    // Diagram pencar

    [
        "Diagram pencar",
        "Diagram pencar menyajikan pasangan data dalam bentuk ....",
        "Titik pada bidang koordinat",
        "Potongan lingkaran",
        "Batang frekuensi saja",
        "Garis yang wajib menghubungkan semua titik"
    ],
    [
        "Diagram pencar",
        "Dalam diagram pencar dengan sumbu mendatar X dan sumbu tegak Y, sumbu mendatar menyatakan ....",
        "Variabel X",
        "Variabel Y",
        "Banyaknya titik saja",
        "Nilai korelasi"
    ],
    [
        "Diagram pencar",
        "Pasangan (3, 75) digambar pada posisi ....",
        "X = 3 dan Y = 75",
        "X = 75 dan Y = 3",
        "X = 3 dan Y = 3",
        "X = 75 dan Y = 75"
    ],
    [
        "Diagram pencar",
        "Satu titik diagram pencar mewakili ....",
        "Satu pasangan data X dan Y",
        "Seluruh data penelitian",
        "Satu nilai rata-rata saja",
        "Satu rumus korelasi"
    ],
    [
        "Diagram pencar",
        "Saat menggambar diagram pencar, titik-titik ....",
        "Tidak wajib dihubungkan",
        "Harus selalu dihubungkan berurutan",
        "Harus membentuk lingkaran",
        "Harus berada di sumbu X"
    ],
    [
        "Diagram pencar",
        "Agar diagram mudah dibaca, setiap sumbu perlu diberi ....",
        "Nama variabel dan satuan",
        "Nama semua responden",
        "Kunci jawaban",
        "Nomor halaman saja"
    ],
    [
        "Diagram pencar",
        "Lima pasangan berbeda diplot dan tidak ada titik bertumpuk. Banyak titiknya adalah ....",
        "5", "10", "2", "25"
    ],
    [
        "Diagram pencar",
        "Diagram pencar terutama membantu mengamati ....",
        "Pola hubungan dua variabel",
        "Jumlah kategori warna saja",
        "Persentase satu kategori saja",
        "Urutan abjad nama siswa"
    ],
    [
        "Diagram pencar",
        "Jika X menyatakan biaya iklan dalam juta rupiah, label sumbu X yang tepat adalah ....",
        "Biaya iklan (juta rupiah)",
        "Penjualan (unit)",
        "Waktu (jam)",
        "Korelasi (rupiah)"
    ],

    // Interpretasi hubungan

    [
        "Interpretasi hubungan",
        "Pola titik dari kiri bawah ke kanan atas menunjukkan hubungan ....",
        "Positif",
        "Negatif",
        "Selalu tanpa hubungan",
        "Selalu sebab akibat"
    ],
    [
        "Interpretasi hubungan",
        "Pola titik dari kiri atas ke kanan bawah menunjukkan hubungan ....",
        "Negatif",
        "Positif",
        "Selalu tanpa hubungan",
        "Selalu sebab akibat"
    ],
    [
        "Interpretasi hubungan",
        "Jika titik tersebar acak tanpa kecenderungan yang jelas, kesimpulan visualnya adalah ....",
        "Tidak terlihat pola hubungan yang jelas",
        "Hubungan positif sempurna",
        "Hubungan negatif sempurna",
        "X pasti menyebabkan Y"
    ],
    [
        "Interpretasi hubungan",
        "Hubungan positif berarti ketika X meningkat, Y cenderung ....",
        "Meningkat",
        "Menurun",
        "Selalu nol",
        "Selalu tetap"
    ],
    [
        "Interpretasi hubungan",
        "Hubungan negatif berarti ketika X meningkat, Y cenderung ....",
        "Menurun",
        "Meningkat",
        "Selalu satu",
        "Selalu nol"
    ],
    [
        "Interpretasi hubungan",
        "Untuk jarak yang sama, kecepatan lebih tinggi biasanya diikuti waktu tempuh ....",
        "Lebih singkat",
        "Lebih lama",
        "Selalu sama",
        "Selalu nol"
    ],
    [
        "Interpretasi hubungan",
        "Titik yang rapat mengikuti suatu garis menunjukkan hubungan linear yang cenderung ....",
        "Kuat", "Lemah", "Tidak ada", "Pasti kausal"
    ],
    [
        "Interpretasi hubungan",
        "Titik yang jauh dari pola umum disebut ....",
        "Pencilan",
        "Konstanta",
        "Rata-rata",
        "Koefisien regresi"
    ],
    [
        "Interpretasi hubungan",
        "Korelasi dua variabel dengan sendirinya ....",
        "Belum membuktikan sebab akibat",
        "Selalu membuktikan sebab akibat",
        "Menjamin semua prediksi tepat",
        "Menghilangkan semua faktor lain"
    ],

    // Regresi linear

    [
        "Regresi linear",
        "Bentuk model regresi linear sederhana adalah ....",
        "ŷ = a + bX",
        "ŷ = aX²",
        "r = X + Y",
        "n = a + Y"
    ],
    [
        "Regresi linear",
        "Dalam model ŷ = a + bX, b menyatakan ....",
        "Kemiringan garis regresi",
        "Banyak pasangan data",
        "Nilai korelasi selalu",
        "Nama variabel"
    ],
    [
        "Regresi linear",
        "Dalam model ŷ = a + bX, a merupakan ....",
        "Konstanta atau intersep",
        "Jumlah responden",
        "Nilai X terbesar",
        "Nilai Y terkecil selalu"
    ],
    [
        "Regresi linear",
        "Regresi linear dapat digunakan untuk ....",
        "Memperkirakan Y dari X",
        "Membuktikan kausalitas secara otomatis",
        "Menjamin Y pasti tepat",
        "Mengganti kebutuhan data"
    ],
    [
        "Regresi linear",
        "Jika ŷ = 10 + 2X dan X = 3, prediksi Y adalah ....",
        "16", "13", "15", "20"
    ],
    [
        "Regresi linear",
        "Jika ŷ = 20 − 3X dan X = 4, prediksi Y adalah ....",
        "8", "12", "17", "32"
    ],
    [
        "Regresi linear",
        "Model ŷ = 5 + 4X memiliki kemiringan ....",
        "4", "5", "9", "20"
    ],
    [
        "Regresi linear",
        "Garis regresi dari data pengamatan ....",
        "Tidak harus melewati semua titik",
        "Harus melewati semua titik",
        "Selalu mendatar",
        "Selalu melalui titik asal"
    ],
    [
        "Regresi linear",
        "Lambang ŷ menyatakan ....",
        "Nilai Y hasil prediksi",
        "Nilai X hasil pengukuran",
        "Jumlah data",
        "Koefisien korelasi"
    ],

    // Korelasi

    [
        "Korelasi",
        "Koefisien korelasi Pearson dilambangkan dengan ....",
        "r", "n", "a", "X"
    ],
    [
        "Korelasi",
        "Rentang nilai korelasi Pearson adalah ....",
        "−1 sampai 1",
        "0 sampai 100",
        "1 sampai 10",
        "−100 sampai 0"
    ],
    [
        "Korelasi",
        "Nilai r mendekati +1 menunjukkan ....",
        "Hubungan linear positif kuat",
        "Hubungan linear negatif kuat",
        "Tidak ada hubungan linear",
        "Hubungan sebab akibat pasti"
    ],
    [
        "Korelasi",
        "Nilai r mendekati −1 menunjukkan ....",
        "Hubungan linear negatif kuat",
        "Hubungan linear positif kuat",
        "Tidak ada hubungan linear",
        "Semua nilai Y nol"
    ],
    [
        "Korelasi",
        "Nilai r mendekati 0 menunjukkan ....",
        "Hubungan linear lemah atau tidak ada",
        "Hubungan positif sempurna",
        "Hubungan negatif sempurna",
        "Tidak mungkin ada pola nonlinier"
    ],
    [
        "Korelasi",
        "Nilai yang tidak mungkin menjadi koefisien korelasi Pearson adalah ....",
        "1,20", "0,80", "−0,50", "0,00"
    ],
    [
        "Korelasi",
        "Tanda negatif pada r menunjukkan ....",
        "Arah hubungan berlawanan",
        "Data pasti salah",
        "Jumlah data negatif",
        "Hubungan selalu lemah"
    ],
    [
        "Korelasi",
        "Nilai r = 0,95 menunjukkan arah hubungan ....",
        "Positif",
        "Negatif",
        "Tidak terdefinisi",
        "Tidak ada arah linear"
    ],
    [
        "Korelasi",
        "Nilai r = −0,95 menunjukkan arah hubungan ....",
        "Negatif",
        "Positif",
        "Selalu lemah",
        "Selalu kausal"
    ],

    // -------------------- SEDANG --------------------

    // Data bivariat

    [
        "Data bivariat",
        "Seorang peneliti ingin memprediksi penjualan es krim dari suhu. Penetapan variabel yang tepat adalah ....",
        "X suhu dan Y penjualan",
        "X penjualan dan Y nomor toko",
        "X nama toko dan Y suhu",
        "X nomor hari dan Y nama toko"
    ],
    [
        "Data bivariat",
        "Dalam tabel pasangan (1, 55), (2, 65), (4, 80), (6, 90), banyak pengamatan n adalah ....",
        "4", "8", "6", "10"
    ],
    [
        "Data bivariat",
        "Untuk pasangan data (2, 5), nilai XY adalah ....",
        "10", "7", "25", "4"
    ],
    [
        "Data bivariat",
        "Untuk pasangan data (3, 4), nilai X² adalah ....",
        "9", "12", "16", "6"
    ],
    [
        "Data bivariat",
        "Untuk pasangan data (3, 4), nilai Y² adalah ....",
        "16", "9", "12", "8"
    ],
    [
        "Data bivariat",
        "Data (1, 2), (2, 4), (3, 6) memiliki ΣX sebesar ....",
        "6", "12", "14", "3"
    ],
    [
        "Data bivariat",
        "Data (1, 2), (2, 4), (3, 6) memiliki rata-rata Y sebesar ....",
        "4", "2", "6", "12"
    ],

    // Diagram pencar

    [
        "Diagram pencar",
        "Data (1, 2), (2, 4), (3, 6), (4, 8) membentuk pola ....",
        "Linear naik",
        "Linear turun",
        "Melingkar",
        "Acak tanpa pola"
    ],
    [
        "Diagram pencar",
        "Data (1, 8), (2, 6), (3, 4), (4, 2) membentuk pola ....",
        "Linear turun",
        "Linear naik",
        "Melingkar",
        "Acak tanpa pola"
    ],
    [
        "Diagram pencar",
        "X berkisar 0–50. Jika tersedia 10 petak dari 0 sampai 50, skala tiap petak adalah ....",
        "5", "10", "50", "500"
    ],
    [
        "Diagram pencar",
        "Y berkisar 0–100. Jika tersedia 10 petak dari 0 sampai 100, skala tiap petak adalah ....",
        "10", "5", "20", "100"
    ],
    [
        "Diagram pencar",
        "Dua objek sama-sama memiliki pasangan (2, 5). Ketika diplot, kedua titik ....",
        "Bertumpuk pada koordinat yang sama",
        "Pasti terpisah",
        "Menjadi (4, 10)",
        "Harus dibuang keduanya"
    ],
    [
        "Diagram pencar",
        "Data (1, 1), (2, 4), (3, 9), (4, 16) paling sesuai dengan pola ....",
        "Naik dan nonlinier",
        "Linear mendatar",
        "Linear turun",
        "Acak tanpa pola"
    ],
    [
        "Diagram pencar",
        "Jika diagram hanya menampilkan titik dalam rentang X 0–10, tetapi data X mencapai 30, tindakan tepat adalah ....",
        "Menyesuaikan skala agar seluruh data terlihat",
        "Menghapus semua X di atas 10",
        "Mengubah semua X menjadi 10",
        "Mengabaikan sumbu X"
    ],

    // Interpretasi hubungan

    [
        "Interpretasi hubungan",
        "Pada data (1, 5), (2, 7), (3, 9), arah hubungan adalah ....",
        "Positif",
        "Negatif",
        "Tidak ada hubungan linear",
        "Tidak terdefinisi"
    ],
    [
        "Interpretasi hubungan",
        "Pada data (1, 9), (2, 7), (3, 5), arah hubungan adalah ....",
        "Negatif",
        "Positif",
        "Tidak ada hubungan linear",
        "Tidak terdefinisi"
    ],
    [
        "Interpretasi hubungan",
        "Dua diagram sama-sama naik. Diagram A lebih rapat mengikuti garis dibanding B. Hubungan linear yang lebih kuat secara visual adalah ....",
        "Diagram A",
        "Diagram B",
        "Selalu sama",
        "Tidak mungkin dibandingkan secara visual"
    ],
    [
        "Interpretasi hubungan",
        "Pada data (1, 2), (2, 4), (3, 6), (4, 30), titik yang paling menyimpang dari pola tiga titik pertama adalah ....",
        "(4, 30)", "(1, 2)", "(2, 4)", "(3, 6)"
    ],
    [
        "Interpretasi hubungan",
        "Sebelum menghapus pencilan, langkah pertama yang tepat adalah ....",
        "Memeriksa pengukuran dan konteks data",
        "Langsung menghapus titik",
        "Mengganti nilainya dengan nol",
        "Menganggapnya selalu salah"
    ],
    [
        "Interpretasi hubungan",
        "Biaya iklan dan penjualan berkorelasi positif. Kesimpulan yang tepat adalah ....",
        "Biaya iklan lebih tinggi cenderung disertai penjualan lebih tinggi",
        "Iklan pasti satu-satunya penyebab penjualan",
        "Semua kenaikan iklan selalu menaikkan penjualan",
        "Tidak perlu melihat faktor lain"
    ],
    [
        "Interpretasi hubungan",
        "Jika r = 0, tetapi diagram membentuk kurva yang jelas, kesimpulan yang tepat adalah ....",
        "Hubungan nonlinier mungkin tetap ada",
        "Kedua variabel pasti tidak berhubungan sama sekali",
        "Semua nilai Y harus sama",
        "Perhitungan r selalu salah"
    ],

    // Regresi linear

    [
        "Regresi linear",
        "Jika ŷ = 12 + 4X, prediksi Y untuk X = 5 adalah ....",
        "32", "20", "17", "60"
    ],
    [
        "Regresi linear",
        "Jika ŷ = 100 − 5X, prediksi Y untuk X = 6 adalah ....",
        "70", "95", "30", "130"
    ],
    [
        "Regresi linear",
        "Model ŷ = 40 + 8X untuk jam belajar dan nilai ujian berarti setiap tambahan 1 jam diikuti kenaikan nilai prediksi sebesar ....",
        "8 poin", "40 poin", "48 poin", "1 poin"
    ],
    [
        "Regresi linear",
        "Jika X̄ = 3, Ȳ = 12, dan b = 2, konstanta a adalah ....",
        "6", "9", "18", "24"
    ],
    [
        "Regresi linear",
        "Jika a = 5 dan b = −2, model regresinya adalah ....",
        "ŷ = 5 − 2X",
        "ŷ = −2 + 5X",
        "ŷ = 5 + 2X",
        "ŷ = −5 − 2X"
    ],
    [
        "Regresi linear",
        "Data X hanya diamati pada rentang 1–5. Prediksi pada X = 20 termasuk ....",
        "Ekstrapolasi",
        "Interpolasi",
        "Pengukuran langsung",
        "Nilai rata-rata"
    ],
    [
        "Regresi linear",
        "Data X diamati pada rentang 1–5. Prediksi pada X = 3,5 termasuk ....",
        "Interpolasi",
        "Ekstrapolasi",
        "Pengukuran pasti",
        "Korelasi sempurna"
    ],

    // Korelasi

    [
        "Korelasi",
        "Hubungan linear paling kuat di antara nilai berikut adalah ....",
        "r = −0,95",
        "r = 0,80",
        "r = −0,40",
        "r = 0,10"
    ],
    [
        "Korelasi",
        "Hubungan linear paling lemah di antara nilai berikut adalah ....",
        "r = 0,05",
        "r = −0,90",
        "r = 0,75",
        "r = −0,60"
    ],
    [
        "Korelasi",
        "Dua data memiliki r = 0,85 dan r = −0,85. Pernyataan yang benar adalah ....",
        "Kekuatan linear sama tetapi arah berbeda",
        "Yang positif selalu lebih kuat",
        "Yang negatif selalu lebih lemah",
        "Keduanya tidak punya hubungan linear"
    ],
    [
        "Korelasi",
        "Jika semua X sama, korelasi Pearson ....",
        "Tidak dapat dihitung karena penyebut nol",
        "Selalu 1",
        "Selalu −1",
        "Selalu 0"
    ],
    [
        "Korelasi",
        "Data (1, 3), (2, 5), (3, 7) memiliki r sebesar ....",
        "1", "−1", "0", "0,5"
    ],
    [
        "Korelasi",
        "Data (1, 7), (2, 5), (3, 3) memiliki r sebesar ....",
        "−1", "1", "0", "−0,5"
    ],

    // -------------------- SULIT --------------------

    // Perhitungan regresi

    [
        "Regresi linear",
        "Diketahui n = 3, ΣX = 6, ΣY = 15, ΣXY = 34, dan ΣX² = 14. Nilai b adalah ....",
        "2", "1", "3", "4"
    ],
    [
        "Regresi linear",
        "Diketahui n = 3, ΣX = 6, ΣY = 15, dan b = 2. Nilai a adalah ....",
        "1", "2", "3", "5"
    ],
    [
        "Regresi linear",
        "Data (1, 2), (2, 3), (3, 5) memiliki model regresi ....",
        "ŷ = 1/3 + 1,5X",
        "ŷ = 1 + 2X",
        "ŷ = 2 + X",
        "ŷ = 1,5 + X/3"
    ],
    [
        "Regresi linear",
        "Data jam belajar dan nilai (1, 55), (2, 65), (3, 75), (4, 80), (5, 90) memiliki model regresi ....",
        "ŷ = 47,5 + 8,5X",
        "ŷ = 47 + 8,5X",
        "ŷ = 50 + 5X",
        "ŷ = 55 + 10X"
    ],
    [
        "Regresi linear",
        "Dari data (1, 55), (2, 65), (3, 75), (4, 80), (5, 90), modelnya ŷ = 47,5 + 8,5X. Prediksi pada X = 3,5 adalah ....",
        "77,25", "76,75", "72,50", "80,00"
    ],
    [
        "Regresi linear",
        "Diketahui X̄ = 4, Ȳ = 18, dan b = −3. Konstanta a adalah ....",
        "30", "6", "15", "21"
    ],
    [
        "Regresi linear",
        "Garis regresi kuadrat terkecil dengan intersep untuk data X dan Y selalu melalui ....",
        "(X̄, Ȳ)",
        "(0, 0)",
        "Titik X terkecil",
        "Semua titik data"
    ],

    // Perhitungan dan sifat korelasi

    [
        "Korelasi",
        "Diketahui n = 3, ΣX = 6, ΣY = 12, dan ΣXY = 28. Pembilang rumus Pearson nΣXY − (ΣX)(ΣY) adalah ....",
        "12", "28", "72", "84"
    ],
    [
        "Korelasi",
        "Diketahui n = 3, ΣX = 6, ΣX² = 14, ΣY = 12, dan ΣY² = 56. Penyebut rumus Pearson adalah ....",
        "12", "6", "24", "144"
    ],
    [
        "Korelasi",
        "Diketahui n = 3, ΣX = 6, ΣY = 12, ΣXY = 28, ΣX² = 14, dan ΣY² = 56. Nilai r adalah ....",
        "1", "−1", "0", "0,5"
    ],
    [
        "Korelasi",
        "Data (1, 2), (2, 3), (3, 5) memiliki r yang dibulatkan tiga desimal sebesar ....",
        "0,982", "0,500", "−0,982", "1,000"
    ],
    [
        "Korelasi",
        "Data (1, 2), (2, 1), (3, 2) memiliki korelasi Pearson sebesar ....",
        "0", "1", "−1", "0,5"
    ],
    [
        "Korelasi",
        "Pada r = −0,88, mengganti satuan X dari meter ke sentimeter membuat r ....",
        "Tetap −0,88",
        "Menjadi −88",
        "Menjadi 0,88",
        "Menjadi 0"
    ],
    [
        "Korelasi",
        "Jika semua nilai Y ditambah konstanta 10 dan variansnya semula tidak nol, korelasi Pearson ....",
        "Tetap sama",
        "Selalu bertambah 10",
        "Selalu menjadi 1",
        "Selalu menjadi 0"
    ],

    // Analisis kontekstual

    [
        "Interpretasi hubungan",
        "Penjualan es krim dan kasus sengatan panas meningkat bersama saat cuaca panas. Penjelasan yang perlu dipertimbangkan adalah ....",
        "Suhu dapat memengaruhi kedua variabel",
        "Es krim pasti menyebabkan sengatan panas",
        "Korelasi membuktikan penyebab tunggal",
        "Data tidak perlu dianalisis"
    ],
    [
        "Interpretasi hubungan",
        "Penelitian pengamatan menemukan r = 0,93 antara jam belajar dan nilai. Kesimpulan paling tepat adalah ....",
        "Ada hubungan linear positif kuat pada data yang diamati",
        "Belajar pasti satu-satunya penyebab nilai",
        "Setiap siswa pasti mendapat nilai yang sama",
        "Hubungan itu berlaku pasti pada semua populasi"
    ],
    [
        "Interpretasi hubungan",
        "Pencilan membuat r berubah dari 0,20 menjadi 0,90. Tindakan analisis yang tepat adalah ....",
        "Memeriksa pencilan dan melaporkan pengaruhnya secara transparan",
        "Menghapus pencilan hanya agar r besar",
        "Memilih hasil yang paling disukai",
        "Mengganti semua data agar r = 1"
    ],
    [
        "Interpretasi hubungan",
        "Model dari data X 2–8 digunakan untuk memprediksi X = 50. Mengapa hasilnya perlu hati-hati?",
        "Prediksi jauh di luar rentang pengamatan",
        "Prediksi pasti tepat karena ada rumus",
        "Regresi hanya boleh memakai X = 0",
        "Korelasi selalu menjadi nol"
    ],
    [
        "Interpretasi hubungan",
        "Biaya iklan dan penjualan punya r tinggi, tetapi diagram melengkung. Sebelum memakai regresi linear, sebaiknya ....",
        "Memeriksa apakah model linear sesuai dengan pola data",
        "Mengabaikan diagram karena r tinggi",
        "Menganggap semua model sama",
        "Menghapus data yang tidak lurus"
    ],
    [
        "Interpretasi hubungan",
        "Dua kelompok digabung dan menghasilkan r berbeda jauh dari r masing-masing kelompok. Tindakan tepat adalah ....",
        "Meninjau pola tiap kelompok dan faktor pembeda",
        "Menganggap semua hasil salah otomatis",
        "Menggunakan hasil gabungan tanpa memeriksa",
        "Mengganti label kelompok secara acak"
    ],
    [
        "Interpretasi hubungan",
        "Kesimpulan analisis data yang paling lengkap memuat ....",
        "Nama variabel, pola, hasil hitung, dan keterbatasan",
        "Nilai r saja tanpa konteks",
        "Persamaan saja tanpa satuan",
        "Klaim sebab akibat tanpa bukti tambahan"
    ]
];

// ============================================================
// KONVERSI BANK SOAL KE FORMAT PERMAINAN
// ============================================================

let daftarSoal = bankStatistika.map(function(baris, index) {
    const id = index + 1;
    const kode = ["A", "B", "C", "D"];
    const opsi = baris.slice(2);
    const offset = index % 4;
    const pilihan = {};

    kode.forEach(function(huruf, i) {
        pilihan[huruf] = opsi[(i - offset + 4) % 4];
    });

    return {
        id: id,
        level: id <= 45 ? "mudah" : id <= 79 ? "sedang" : "sulit",
        topik: baris[0],
        soal: baris[1],
        pilihan: pilihan,
        jawaban: kode[offset]
    };
});

// ============================================================
// PENGELOLAAN SOAL DAN JAWABAN
// ============================================================

// Soal yang sedang aktif
let soalAktif = null;

// Menyimpan ID soal yang sudah muncul agar tidak cepat berulang.
let soalTerpakai = new Set();

function escapeHTML(teks) {
    return String(teks)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function formatTeksSoal(teks) {
    // Mendukung HTML dari bank soal internal.
    return String(teks)
        .replace(/\r/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\n/g, "<br>");
}

function tentukanLevelSoal() {
    // Tingkat soal mengikuti posisi pion:
    // Kotak 1-30   = mudah
    // Kotak 31-65  = sedang
    // Kotak 66-100 = sulit

    let posisiSekarang = 0;

    if (
        typeof posisi !== "undefined" &&
        typeof giliran !== "undefined"
    ) {
        posisiSekarang = posisi[giliran] || 0;
    }

    if (posisiSekarang <= 30) return "mudah";
    if (posisiSekarang <= 65) return "sedang";
    return "sulit";
}

function ambilSoalAcak(level) {
    let kandidat = daftarSoal.filter(function(item) {
        return item.level === level && !soalTerpakai.has(item.id);
    });

    // Setelah seluruh soal satu level terpakai,
    // soal pada level tersebut dapat muncul kembali.
    if (kandidat.length === 0) {
        daftarSoal
            .filter(function(item) {
                return item.level === level;
            })
            .forEach(function(item) {
                soalTerpakai.delete(item.id);
            });

        kandidat = daftarSoal.filter(function(item) {
            return item.level === level;
        });
    }

    const index = Math.floor(Math.random() * kandidat.length);
    const terpilih = kandidat[index];

    soalTerpakai.add(terpilih.id);
    return terpilih;
}

function siapkanTombolPilihan(kode) {
    let tombol = document.getElementById(kode);
    const options = document.getElementById("questionOptions");

    if (!tombol) {
        tombol = document.createElement("button");
        tombol.id = kode;

        tombol.onclick = function() {
            jawab(kode);
        };

        options.appendChild(tombol);
    }

    return tombol;
}

function resetTampilanJawaban() {
    ["A", "B", "C", "D", "E"].forEach(function(kode) {
        const tombol = document.getElementById(kode);

        if (!tombol) return;

        tombol.disabled = false;
        tombol.classList.remove(
            "answer-correct",
            "answer-wrong",
            "answer-dim"
        );
    });

    const feedback = document.getElementById("answerFeedback");

    if (feedback) {
        feedback.style.display = "none";
        feedback.classList.remove(
            "feedback-correct",
            "feedback-wrong"
        );
    }
}

function tampilkanSoal() {
    const level = tentukanLevelSoal();

    soalAktif = ambilSoalAcak(level);
    sedangMenjawab = true;

    const judulLevel =
        level.charAt(0).toUpperCase() + level.slice(1);

    const namaPemain =
        typeof pemain !== "undefined" && pemain[giliran]
            ? pemain[giliran]
            : "Pemain";

    const questionPlayer =
        document.getElementById("questionPlayer");

    if (questionPlayer) {
        questionPlayer.textContent = namaPemain;
    }

    document.getElementById("question").innerHTML =
        '<div class="info-soal">' +
            '<span class="badge-level level-' + level + '">' +
                "Level " + judulLevel +
            "</span>" +
            '<span class="nomor-soal">' +
                "Soal " + soalAktif.id + " - " +
                escapeHTML(soalAktif.topik) +
            "</span>" +
        "</div>" +
        '<div class="teks-soal">' +
            formatTeksSoal(soalAktif.soal) +
        "</div>";

    ["A", "B", "C", "D", "E"].forEach(function(kode) {
        const tombol = siapkanTombolPilihan(kode);

        if (
            Object.prototype.hasOwnProperty.call(
                soalAktif.pilihan,
                kode
            )
        ) {
            tombol.style.display = "block";
            tombol.innerHTML =
                '<span class="answer-letter">' +
                    kode +
                "</span>" +
                '<span class="answer-content">' +
                    formatTeksSoal(soalAktif.pilihan[kode]) +
                "</span>";
        } else {
            tombol.style.display = "none";
        }
    });

    resetTampilanJawaban();

    const box = document.getElementById("questionBox");
    box.style.display = "flex";

    requestAnimationFrame(function() {
        box.classList.add("is-open");
    });

    if (typeof mainkanSuara === "function") {
        mainkanSuara("question");
    }
}

function tutupPopupSoal() {
    const box = document.getElementById("questionBox");

    box.classList.remove("is-open");

    setTimeout(function() {
        box.style.display = "none";
    }, 220);
}

function tampilkanFeedbackJawaban(benar, pilihan) {
    const feedback = document.getElementById("answerFeedback");
    const icon = document.getElementById("feedbackIcon");
    const title = document.getElementById("feedbackTitle");
    const text = document.getElementById("feedbackText");

    feedback.classList.remove(
        "feedback-correct",
        "feedback-wrong"
    );

    if (benar) {
        feedback.classList.add("feedback-correct");
        icon.textContent = "✅";
        title.textContent = "Jawaban Benar!";
        text.textContent =
            "Hebat! Kamu mendapat satu kesempatan melempar dadu lagi.";
    } else {
        feedback.classList.add("feedback-wrong");
        icon.textContent = "❌";
        title.textContent = "Belum Tepat";
        text.textContent =
            "Jawaban yang benar adalah pilihan " +
            soalAktif.jawaban +
            ". Giliran berpindah ke pemain berikutnya.";
    }

    feedback.style.display = "flex";
}

function jawab(pilihan) {
    if (!soalAktif || !sedangMenjawab) return;

    sedangMenjawab = false;

    const benar = pilihan === soalAktif.jawaban;

    ["A", "B", "C", "D", "E"].forEach(function(kode) {
        const tombol = document.getElementById(kode);

        if (!tombol || tombol.style.display === "none") return;

        tombol.disabled = true;

        if (kode === soalAktif.jawaban) {
            tombol.classList.add("answer-correct");
        } else if (kode === pilihan && !benar) {
            tombol.classList.add("answer-wrong");
        } else {
            tombol.classList.add("answer-dim");
        }
    });

    tampilkanFeedbackJawaban(benar, pilihan);

    if (benar) {
        if (typeof mainkanSuara === "function") {
            mainkanSuara("correct");
        }

        setTimeout(function() {
            tutupPopupSoal();
            statusGame = "READY";
            lemparTambahan = true;
            sedangBerjalan = false;
        }, 1800);
    } else {
        if (typeof mainkanSuara === "function") {
            mainkanSuara("wrong");
        }

        setTimeout(function() {
            tutupPopupSoal();
            statusGame = "READY";
            gantiGiliran();
        }, 2200);
    }
}

// Marker untuk memeriksa versi yang dimuat browser.
console.log("SOAL-V4-STATISTIKA-AKTIF");