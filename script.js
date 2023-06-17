// Script untuk bagian search
const form = document.querySelector("form"); // Ambil referensi elemen form dan input pencarian
const searchInput = document.getElementById("search-input"); // Ambil referensi elemen form dan input pencarian

form.addEventListener("submit", function (event) {
  // Tambahkan event listener untuk submit form
  event.preventDefault(); // Mencegah form dikirim ke halaman lain

  const searchText = searchInput.value.trim(); // Ambil teks pencarian dan hapus spasi di awal dan akhir

  if (searchText !== "") {
    // Periksa apakah teks pencarian tidak kosong
    window.location.hash = searchText; // Lakukan pengalihan ke elemen dengan ID yang sesuai dengan teks pencarian
  }
});

// Script untuk mengatur bagian Navbar
var navbar = document.querySelector(".navbar"); // Mendapatkan elemen navbar

var scrollPosition = window.pageYOffset; // Mendapatkan posisi scroll awal

var scrollThreshold = 200; // Mendefinisikan jarak scroll minimum untuk memunculkan/menghilangkan navbar

window.addEventListener("scroll", function () {
  // Menambahkan event listener pada event scroll
  var currentScrollPosition = window.pageYOffset; // Mendapatkan posisi scroll saat ini

  var scrollDirection = currentScrollPosition > scrollPosition ? "down" : "up"; // Menentukan arah scroll (ke atas atau ke bawah)

  scrollPosition = currentScrollPosition; // Memperbarui posisi scroll

  // Mengubah kelas navbar berdasarkan arah scroll dan jarak scroll threshold
  if (scrollDirection === "down" && scrollPosition > scrollThreshold) {
    navbar.classList.add("hidden");
  } else if (scrollDirection === "up" || scrollPosition <= scrollThreshold) {
    navbar.classList.remove("hidden");
  }
});

// Scroll Animation
const sr = ScrollReveal({
  distance: "65px",
  duration: 1600,
  reset: true,
});

//Content
sr.reveal(".judul", { delay: 100, origin: "left" });
sr.reveal(".maincontent", { delay: 200, origin: "left" });
sr.reveal(".first", { delay: 200, origin: "right" });

// VM
sr.reveal(".judulvm", { delay: 100, origin: "bottom" });
sr.reveal(".subjudulvm", { delay: 200, origin: "bottom" });
sr.reveal(".tegar", { delay: 200, origin: "left" });
sr.reveal(".hanif", { delay: 200, origin: "right" });

//support
sr.reveal(".support", { delay: 100, origin: "bottom" });

//Pendaftaran
sr.reveal(".daftar h3", { delay: 200, origin: "bottom" });
sr.reveal(".pendaftaran", { delay: 300, origin: "bottom" });
sr.reveal(".join", { delay: 300, origin: "left", distance: "40px" });
sr.reveal(".web", { delay: 300, origin: "right", distance: "40px" });
