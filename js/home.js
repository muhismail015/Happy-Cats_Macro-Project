// Navbar
/*==================== Toggle Profile Navbar  ====================*/
let profileDropdownList = document.querySelector(".prof-droplist");
let btn = document.querySelector(".prof-dropdown-btn");

/*Fungsi Untuk Menampilkan atau menyembunyikan Dropdown List*/
const toggle = () => profileDropdownList.classList.toggle("active");

window.addEventListener("click", function (e) {
  /*Fungsi Untuk menyembunyikan Dropdown List jika user mengklik diluar tombol dropdown*/
  if (!btn.contains(e.target)) profileDropdownList.classList.remove("active");
});
