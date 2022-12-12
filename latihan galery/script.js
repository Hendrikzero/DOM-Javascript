const displayImg = document.querySelector(".displayImg");
const thumbnail = document.querySelector(".thumbnail");
const thumb = document.querySelectorAll(".thumb");

thumbnail.addEventListener("click",(e)=>{
    if(e.target.className == "thumb"){
        displayImg.src = e.target.getAttribute("src");
    }

    displayImg.classList.add("fade");
    setTimeout(()=>{
        displayImg.classList.remove("fade");
    },500)

    thumb.forEach((listThumb)=>{
        listThumb.className = "thumb";
    });

    e.target.classList.add("active");
});