'use strict';

const box = document.querySelector('.box');
const removeText = document.querySelector('.removeText');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close');
const btnsOpen = document.querySelectorAll('.show');

const open = function () {
    removeText.classList.add('hide');
    box.classList.remove('hide');
    overlay.classList.remove('hide');
};
const close = function () {
    removeText.classList.remove('hide');
    box.classList.add('hide');
    overlay.classList.add('hide');
};
btnsOpen.forEach(btn => btn.addEventListener("click",open))
btnClose.addEventListener("click",close);
overlay.addEventListener('click', close);