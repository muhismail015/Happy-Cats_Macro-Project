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

// Pembayaran donasi (anonim)
function anonima() {
  let checkbox = document.getElementById("checkbox");

  if (checkbox) {
    let inputs = document.getElementsByClassName("form-control");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = checkbox.checked;
    }
  } else {
    console.error("nothing");
  }
}
