const tmblX = document.querySelectorAll(".close");

tmblX.forEach(function(e){
    console.log(e);
    e.addEventListener("click",function(events){
        events.target.parentElement.style.display = "none";
    });
});

// .target digunakan untuk mengambil target