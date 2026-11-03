let form = document.getElementById("formLogin");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let pesan = document.getElementById("pesan");

    if(email === "" || password === ""){
        pesan.textContent = "Email dan password wajib diisi!";
        pesan.style.color = "red";
    }else if(
        email === "dita@gmail.com" &&
        password === "12345"
    ){
        pesan.textContent = "Login berhasil!";
        pesan.style.color = "green";

        setTimeout(function() {
            window.location.href = "../searchFilter/katalog.html";
        }, 500);

    }else{
        pesan.textContent = "Email atau password salah!";
        pesan.style.color = "red";
    }
});