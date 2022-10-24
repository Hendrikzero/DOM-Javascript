const gambarJumbo = document.querySelector(".jumbo");
const thumbail = document.querySelector(".thumbail");
const thumb = document.querySelectorAll(".thumb");


thumbail.addEventListener("click",(e)=>{
    
    if(e.target.className == "thumb"){
        gambarJumbo.src = e.target.getAttribute("src");
        
        gambarJumbo.classList.add("fade");
        setTimeout(function(){
            gambarJumbo.classList.remove("fade");
        },500);

        thumb.forEach((listThumb)=>{
            listThumb.className = "thumb";
        });

        e.target.classList.add("active");
    }
});