// Mempelajari tentang Manipulation Element
// 1. element.innerHTML => digunakan untuk memanipulation isi dari sebuah tag element

const secA = document.querySelector("section#a");

const secB = document.querySelector("section#b");

const judul = document.getElementById('judul');

judul.innerHTML = "<em>Hendrik Ari Purna Irawan</em>";

// 2. element.style.(properti css)
const list = secB.querySelectorAll("ul li");

list[2].style.backgroundColor = "yellow";

//  3. element.setAttribute('nama atribute', 'isi attribute')

judul.setAttribute("name", "judul halaman");

// 4. element.getAttribute("nama atribute") => digunakan untuk melihat isi dari attribute yang diinginkan

const link = secA.querySelector('a');

// 5. removeAttribute("nama attribute") => digunakan untuk menghapus attribute yang diinginkan

judul.removeAttribute("name");

// 6. element.classlist.add("nama class") => digunakan untuk menambahkan class 

const p1 = document.querySelector('.p1');
p1.classList.add("label");

// 7. element.classlist.remove("nama class") => digunakan untuk menghapus class yang sudah ada

p1.classList.remove("label");

// 8. element.classlist.toggle("nama class") => digunakan untuk menambahkan class jika belum ada class dengan nama tersebut. jika sudah ada, maka class tersebut akan di hapus

document.body.classList.toggle('biru-muda');

// 9. element.classList.item(no urutan) => digunakan untuk menampilkan class berdasarkan no urutan yang dicari

p1.classList.add("satu", "dua", "tiga");
console.log("nama class urutan ke-3 dalam paragraf 1 adalah => " + p1.classList.item(2) + "\n\n\n");

// 10. element.classList.contains("nama class") => digunakan untuk mengecek apakah ada atau tidak nama class yang dicari di dalam tag html yang dimaksud

console.log("didalam tag paragraf 1 apakah terdapat class empat? => " + p1.classList.contains("empat") + "\n\n\n");

// 11. element.classList.replace("nama class yang mau di ganti", "nama class baru") => digunakan untuk mengganti class yang sudah ada ke yang baru

p1.classList.replace("dua", "sepuluh");