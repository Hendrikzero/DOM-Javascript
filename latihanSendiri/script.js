const btGantiWarna = document.getElementById("btgantiWarna");

btGantiWarna.addEventListener("click",function(){
    document.body.classList.toggle("darkMode");
    btGantiWarna.classList.toggle("darkMode");

    if(btGantiWarna.classList.contains("darkMode") == true){
        btGantiWarna.style.borderColor = "white";
    }
});