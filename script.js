// Ambil referensi elemen form dan input pencarian
const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");

// Tambahkan event listener untuk submit form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form dikirim ke halaman lain

  const searchText = searchInput.value.trim(); // Ambil teks pencarian dan hapus spasi di awal dan akhir

  // Periksa apakah teks pencarian tidak kosong
  if (searchText !== "") {
    // Lakukan pengalihan ke elemen dengan ID yang sesuai dengan teks pencarian
    window.location.hash = searchText;
  }
});
