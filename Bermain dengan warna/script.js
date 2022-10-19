const btUbahWarna = document.querySelector(".btn-warna");

btUbahWarna.addEventListener("click", ()=>{
    document.body.classList.toggle("ubah-warna");
});

const btAcakWarna = document.createElement("button");
const teksBtAcak = document.createTextNode("Acak Warna");

btAcakWarna.appendChild(teksBtAcak);
btAcakWarna.setAttribute("type", "button");

// const script = document.getElementsByTagName("script")[0];
// document.body.insertBefore(btAcakWarna,script);

btUbahWarna.after(btAcakWarna);

btAcakWarna.addEventListener("click",()=>{
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
});

const sMerah = document.querySelector("input[name=sMerah");
const sHijau = document.querySelector("input[name=sHijau");
const sBiru = document.querySelector("input[name=sBiru");

sMerah.addEventListener("input", ()=>{
    document.body.style.backgroundColor = "rgb(" + sMerah.value + "," + sHijau.value +"," + sBiru.value + ")";
});

sHijau.addEventListener("input", ()=>{
    document.body.style.backgroundColor = "rgb(" + sMerah.value + "," + sHijau.value +"," + sBiru.value + ")";
});

sBiru.addEventListener("input", ()=>{
    document.body.style.backgroundColor = "rgb(" + sMerah.value + "," + sHijau.value +"," + sBiru.value + ")";
});

// Membuat fungsi untuk mengubah warna ketika mouse bergerak di dalam halaman browser

document.body.addEventListener("mousemove", function(e){
    // clientx => digunakan untuk mengambil nilai sumbu x dalam halaman web
    // clienty => digunakan untuk mengambil nilai sumbu y didalam halaman web

    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
});