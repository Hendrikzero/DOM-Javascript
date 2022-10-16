// Manipulation node 

// 1. appendhild() => digunakan untuk menambahkan tag html yang sudah di buat ke akhir dari parent yang dituju

const pBaru = document.createElement('p');
const isiPBaru = document.createTextNode("Ini paragraf baru");

pBaru.appendChild(isiPBaru);

const sectionA = document.getElementById('a');

sectionA.appendChild(pBaru);

// 2. inserBefore() => digunakan untuk menambahkan tag html yang sudah dibuat ke kondisi yang diinginkan

const liBaru = document.createElement('li');
const itemBaru = document.createTextNode("Item Baru");

liBaru.appendChild(itemBaru);

const ul = document.querySelector("section#b ul");

const li = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru,li);


// 3. removeChild() => digunakan untuk menghapus tag html yang diinginkan

const link = sectionA.getElementsByTagName("a")[0];

sectionA.removeChild(link);



// 4. replaceChild() => digunakan untuk mengganti tag html yang sudah ada ke tag html yang baru dibuat

const h4Baru = document.createElement("h4");
const isiH4 = document.createTextNode("Hendrik Ari Purna Irawan");

h4Baru.appendChild(isiH4);

const sectionB = document.getElementById("b");
const plama = sectionB.querySelector("p");

sectionB.replaceChild(h4Baru,plama);



pBaru.style.backgroundColor = "lightgreen";
h4Baru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
