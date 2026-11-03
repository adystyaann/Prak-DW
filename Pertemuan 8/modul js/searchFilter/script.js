let search = document.getElementById("search");
let filter = document.getElementById("filter");

let produk = document.querySelectorAll(".produk");
let pesan = document.getElementById("tidakDitemukan");

function cariProduk(){
    let kataKunci = search.value.toLowerCase();
    let kategori = filter.value;

    let jumlahDitemukan = 0;

    produk.forEach(function(item){
        let namaProduk = item.querySelector("h3").textContent.toLocaleLowerCase();

        let kategoriProduk = item.dataset.kategori;

        let cocokNama = namaProduk.includes(kataKunci);

        let cocokKategori = kategori === "semua" || kategori === kategoriProduk;

        if(cocokNama && cocokKategori){
            item.computedStyleMap.display = "block";
            jumlahDitemukan++;
        }else{
            item.computedStyleMap.display = "none";
        }
    });

    if(jumlahDitemukan === 0){
        pesan.style.display = "block";
    }else{
        pesan.style.display = "none";
    }
}

search.addEventListener("input", cariProduk);
filter.addEventListener("change", cariProduk);