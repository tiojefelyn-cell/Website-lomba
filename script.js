const tombol = document.getElementById("tombol");
const teks = document.getElementById("teks");

let jumlahKlik = 0;

tombol.addEventListener("click", function() {
    jumlahKlik++;

    teks.textContent = "Kamu sudah klik " + jumlahKlik + " kali!";
});