const tmblX = document.querySelectorAll(".close");

tmblX.forEach(function(e){
    e.addEventListener("click",function(events){
        events.target.parentElement.style.display = "none";

        // dibawah ni adalah penggunaan 'Prevent Default' Agar default tag a tidak akan dijalankan

        events.preventDefault();
    });
});

// .target digunakan untuk mengambil target

// Prevent default digunakan ketika kita tidak ingin menjalankan default dari sebuah tag atau function yang akan dijalankan secara default