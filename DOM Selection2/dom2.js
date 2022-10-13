// 3. document.querySelector('selector di css')

const p4 = document.querySelector('section#b p');

p4.innerHTML = "Ini diubah melalui javascript";

p4.style.backgroundColor = "lightblue";

// 4. document.querySelectorAll('selector di css')

const p = document.querySelectorAll('p');

for( let i = 0; i < p.length; i++ ){
    p[i].style.color = "red";
    p[i].style.fontSize = "20px";
}

// Dapat juga dengan mengubah node root

const sectionB = document.querySelector('section#b');

const li2 = sectionB.querySelector('ul li:nth-child(2)');

li2.style.backgroundColor = "yellow";