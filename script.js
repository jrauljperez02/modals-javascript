'use strict';

const modal0 = document.querySelector('.modal0');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modals = [modal0, modal1, modal2];


const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const closeModal = function(i){
    modals[i].classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function(i){
    modals[i].classList.remove('hidden')
    overlay.classList.remove('hidden')
}


for(let i=0; i< btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click',function(){
        openModal(i)
    });
    btnCloseModal[i].addEventListener('click',function(){
        closeModal(i)
    });
    overlay.addEventListener('click',function(){
        closeModal(i)
    });
    document.addEventListener('keydown',function(e){
        if(e.key === 'Escape' && !modals[i].classList.contains('hidden')){
            closeModal(i);
        }
    })

}