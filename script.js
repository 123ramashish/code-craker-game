const input1 = document.querySelector('#b1');
const input2 = document.querySelector('#b2');
const input3 = document.querySelector('#b3');
const hintfirst = document.querySelector('.hintfirst');
const hintsecond = document.querySelector('.hintsecond');
const hintthird = document.querySelector('.hintthird');
const hintfourth = document.querySelector('.hintfourth');
const hintfifth = document.querySelector('.hintfifth');

let code1;
let code2;
let code3;

window.addEventListener('load', dataloaded);

function dataloaded() {
    code1 = Math.floor(Math.random() * 100) + 1;
    code2 = Math.floor(Math.random() * 100) + 1;
    code3 = Math.floor(Math.random() * 100) + 1;
    const arr1 = [Math.floor(Math.random() * 100) + 1, code2, Math.floor(Math.random() * 100) + 1];
    arr1.forEach(function (value) {
       const span = document.createElement('span');
        span.innerText =`${value}   `;
        hintfirst.appendChild(span);
    });

    const arr2 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    let j1 = Math.floor(Math.random() * arr2.length);
    arr2[j1]=code1;
    arr2.forEach(function (value) {
        const span = document.createElement('span');
        span.innerText =`${value}   `;
        hintsecond.appendChild(span);
    });

    const arr3 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    let j2 = Math.floor(Math.random() * arr3.length);
    let k = Math.floor(Math.random() * arr3.length);
    arr3[j2] = code2;
    arr3[k] = code3;
    arr3.forEach(function (value) {
        const span = document.createElement('span');
        span.innerText =`${value}   `;
        hintthird.appendChild(span);
    });

    const arr4 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    arr4.forEach(function (value) {
const span = document.createElement('span');
        span.innerText =`${value}   `;
        hintfourth.appendChild(span);
        });

    const arr5 = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    j = Math.floor(Math.random() * arr5.length);
    arr5[j] = code3;
    arr5.forEach(function (value) {
const span = document.createElement('span');
        span.innerText =`${value}   `;
        hintfifth.appendChild(span);
        });
}



function myfunc() {
    if (input1.value === '' || input2.value === '' || input3.value === '') {
        alert("Empty Code box!");
    } else {
        const inputCode1 = parseInt(input1.value);
        const inputCode2 = parseInt(input2.value);
        const inputCode3 = parseInt(input3.value);
        
        if (inputCode1 === code1 && inputCode2 === code2 && inputCode3 === code3) {
            alert('Aah! you cracked the code 🫡');
        } else {
            alert('Try again!');
        }
    }
}
