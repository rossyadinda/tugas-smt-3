 // tugas-es6.mjs

// 1. Definisi data array of objects (minimal 6 data transaksi belanja)[span_2](start_span)[span_2](end_span)
const daftarBelanja = [
    { id: 1, barang: "Buku Tulis", harga: 5000, qty: 4, kategori: "ATK" },
    { id: 2, barang: "Pulpen Gel", harga: 3000, qty: 5, kategori: "ATK" },
    { id: 3, barang: "Roti Tawar", harga: 15000, qty: 2, kategori: "Makanan" },
    { id: 4, barang: "Susu UHT", harga: 6000, qty: 3, kategori: "Minuman" },
    { id: 5, barang: "Pensil 2B", harga: 2500, qty: 6, kategori: "ATK" },
    { id: 6, barang: "Air Mineral", harga: 4000, qty: 4, kategori: "Minuman" }
];

// 2. Menggunakan filter() untuk menyaring kategori tertentu (contoh: "ATK")[span_3](start_span)[span_3](end_span)
// Menerapkan arrow function dan destructuring parameter [{ kategori }]
const kategoriPilihan = "ATK";
const belanjaFiltered = daftarBelanja.filter(({ kategori }) => kategori === kategoriPilihan);

console.log(`=== Daftar Belanja Kategori: ${kategoriPilihan} ===`);
console.log(belanjaFiltered);

// 3. Menggunakan map() untuk menghitung subtotal tiap barang (harga * qty)[span_4](start_span)[span_4](end_span)
// Menerapkan destructuring dan arrow function
const belanjaDenganSubtotal = belanjaFiltered.map(({ id, barang, harga, qty, kategori }) => {
    return {
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    };
});

console.log("\n=== Rincian Subtotal Barang ===");
console.log(belanjaDenganSubtotal);

// 4. Menggunakan reduce() untuk menghitung total keseluruhan[span_5](start_span)[span_5](end_span)
// Menerapkan arrow function dan destructuring objek dalam parameter reduce
const totalKeseluruhan = belanjaDenganSubtotal.reduce((accumulator, { subtotal }) => {
    return accumulator + subtotal;
}, 0);

console.log(`\nTotal Keseluruhan Belanja (${kategoriPilihan}): Rp ${totalKeseluruhan}`);