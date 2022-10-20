function getPilihanComp(){
    const com = Math.random();

    if(com < 0.34) return "gajah";
    if(com >= 0.34 && com < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player){
    if(player == comp) return "SERI!";
    if(player == "orang") return (comp == "semut") ? "MENANG!" : "KALAH!";
    if(player == "semut") return (comp == "orang") ? "KALAH!" : "MENANG!";
    if(player == "gajah") return (comp == "semut") ? "KALAH!" : "MENANG!";
}
const papanHasil = document.querySelector(".info");

// membuat function untuk menunjukkan seolah olah komputer berpikir dalam menentukan pilihannya
// dengan menggunakan interfal
function putar(){
    const imgComputer = document.querySelector(".img-komputer");
    const gambar = ["gajah", "semut", "orang"];
    let i = 0
    const waktuMUlai = new Date().getTime();
    setInterval(()=>{
        if(new Date().getTime() - waktuMUlai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", "asset/" + gambar[i++] + ".png");
        if(i == gambar.length) i = 0;
    },100)


}



const pilihan = document.querySelectorAll("li img");
pilihan.forEach((e)=>{
    e.addEventListener("click", ()=>{
        const pilComputer = getPilihanComp();

        const hasil = getHasil(pilComputer,e.className);

        putar();

        setTimeout(() => {
            const imageComputer = document.querySelector(".img-komputer");
            imageComputer.setAttribute("src", "asset/" + pilComputer + ".png");

            papanHasil.innerHTML = hasil;    
        }, 1000);

        
    });
});