// DOM SELECTION
// 1. document.getElementById('id') => mengambil element berdasarkan id

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.innerHTML = "Hendrik Ari Purna Irawan";

// 2. document.getElementsByTagName('tag') => mengambil html collection sesuai dengan tag html yang dimaksud

const p = document.getElementsByTagName("p");

for( let i = 0; i < p.length; i++ ){
    p[i].style.backgroundColor = "lightblue";
    p[i].style.color = "red";
}


// 3. document.getElementsByClassName('nama lass')

const p1 = document.getElementsByClassName('p1')[0];

p1.innerHTML = "Ini diubah dengan menggunakan javasript dom";

