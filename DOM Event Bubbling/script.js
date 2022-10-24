// const tmblX = document.querySelectorAll(".close");

// tmblX.forEach(function(e){
//     e.addEventListener("click",function(events){
//         events.target.parentElement.style.display = "none";

//         // dibawah ni adalah penggunaan 'Prevent Default' Agar default tag a tidak akan dijalankan

//         events.preventDefault();

//         // dibawah ini adalah penggunaan event bubbling
//         events.stopPropagation();
//     });
// });







// .target digunakan untuk mengambil target

// Prevent default digunakan ketika kita tidak ingin menjalankan default dari sebuah tag atau function yang akan dijalankan secara default

//  event bubbling => adalah jika sebuah parent yang juuga memiliki function sebelum childnya, maka function tersebut akan dijalankan juga ketika child yang memiliki function yang berbeda di tekan.

// dengan menggunakan bubbling itu akan menghentikan function dari si parent ketika funtion dari child yang dimaksudkan dijalankan

// dibawah adalah contoh parent yang memiliki functionya tersendiri


// const card = document.querySelectorAll(".card");

// card.forEach((item)=>{
//     item.addEventListener("click",(e)=>{
//         alert("OK!");
//     });
// });

// berikut adalah cara yang benar dalam membuat function untuk setiap card yang ada


const container = document.querySelector(".container");

container.addEventListener("click",(e)=>{
    if(e.target.className == "close"){
        e.target.parentElement.style.display = "none";
    }
});


