'use strict';

let ran
const btn = document.querySelector('.btn')
let min = parseInt(document.querySelector('.mini').value);
let max = parseInt(document.querySelector('.maxi').value);
let result = document.querySelector('.result')



btn.addEventListener('click', function () {
    let min = parseInt(document.querySelector('.mini').value);
    let max = parseInt(document.querySelector('.maxi').value);
    ran = Math.floor(Math.random() * (max - min + 1)) + min
    result.innerHTML = ran
  })