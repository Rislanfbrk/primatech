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

// Mendapatkan elemen navbar
var navbar = document.querySelector('.navbar');

// Mendapatkan posisi scroll awal
var scrollPosition = window.pageYOffset;

// Mendefinisikan jarak scroll minimum untuk memunculkan/menghilangkan navbar
var scrollThreshold = 200;

// Menambahkan event listener pada event scroll
window.addEventListener('scroll', function() {
  // Mendapatkan posisi scroll saat ini
  var currentScrollPosition = window.pageYOffset;

  // Menentukan arah scroll (ke atas atau ke bawah)
  var scrollDirection = currentScrollPosition > scrollPosition ? 'down' : 'up';

  // Memperbarui posisi scroll
  scrollPosition = currentScrollPosition;

  // Mengubah kelas navbar berdasarkan arah scroll dan jarak scroll threshold
  if (scrollDirection === 'down' && scrollPosition > scrollThreshold) {
    navbar.classList.add('hidden');
  } else if (scrollDirection === 'up' || scrollPosition <= scrollThreshold) {
    navbar.classList.remove('hidden');
  }
});
