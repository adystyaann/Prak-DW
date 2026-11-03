let tombolBeli = document.getElementById("beli");
let tombolTutup = document.getElementById("tutup");
let modal = document.getElementById("modal");

// Menampilkan modal
tombolBeli.addEventListener("click", function(){
    modal.style.display = "flex";
});

// Menutup modal
tombolTutup.addEventListener("click", function(){
    modal.style.display = "none";
});

// note: 