// 1. inline html => digunakan untuk events js, yang dimana ditulis di dalam tag html yang diinginnkan

const p2 = document.querySelector(".p2");


function ubahWarna(){
    p2.style.backgroundColor = "lightblue";
}

// 2. element method => digunakan untuk membuat event js, yang dimana ditulis di file js sehingga tidak bercampur aduk dengan file html

const p3 = document.querySelector(".p3");

p3.onclick = ()=>{
    p3.style.backgroundColor = "orange";
}

// 3. addEventListener => ini yang paling sering digunakan dalam pembuatan events di js

const p4 = document.querySelector("section#b p");

const ul = document.querySelector("section#b ul");

p4.addEventListener("click",()=>{
    const liBaru = document.createElement("li");
    const teksLiBaru = document.createTextNode("Item Baru");

    liBaru.appendChild(teksLiBaru);

    ul.appendChild
    (liBaru);
});

p4.addEventListener("mouseover",()=>{
    p4.style.backgroundColor = "lightblue";

});

p4.addEventListener("mouseleave", ()=>{
    p4.style.backgroundColor = "white";
    
});