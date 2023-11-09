const menu = document.querySelector('#menu');
const h1escondido = document.querySelectorAll('header h1');
const imgModal = document.querySelector('.foto');
const imgNext = document.querySelector('.next');
const imgPrev = document.querySelector('.prev');
const imgClose = document.querySelector('.close');
const imagens = document.querySelectorAll('.imagem .img');
const modal = document.querySelector('.modal');
const like = document.querySelectorAll('.like');
const modalLike = document.querySelector('.modal-like');
const arrayImagens = Array.prototype.slice.call(imagens);
const arrayLikes = Array.prototype.slice.call(like);


menu.addEventListener('click', mostrarMenu)

imagens.forEach(imagem => {
    imagem.addEventListener('click', function (event) {
        abrirModal(event);

    })
})

imgModal.addEventListener('click', function (event) {
    event.stopPropagation();
})

imgModal.addEventListener('dblclick', function (event) {
    const indice = arrayImagens.findIndex(imagem => imagem.src === event.target.src)
    arrayLikes[indice].src = "/classe-01/assets/like.svg";
    modalLike.src = "/classe-01/assets/like.svg";

})

modal.addEventListener('click', function (event) {
    modal.classList.add('escondido');
    imgNext.classList.add('escondido');
    imgPrev.classList.add('escondido');
})

function abrirModal(event) {
    imgModal.src = event.target.src;
    modal.classList.remove('escondido');
    imgClose.classList.remove('escondido');
    mostrarSeta(imgModal);
    temLike();

    let indice = arrayImagens.indexOf(event.target);
    imgNext.addEventListener('click', function (event) {
        event.stopPropagation();
        imgModal.src = arrayImagens[indice + 1].src;
        indice++;
        mostrarSeta(imgModal);
        temLike();

    })

    imgPrev.addEventListener('click', function (event) {
        event.stopPropagation();
        imgModal.src = arrayImagens[indice - 1].src;
        indice--;
        mostrarSeta(imgModal);
        temLike();
    })


}


function mostrarSeta(imgModal) {
    const lastIndice = imagens.length - 1;

    if (imgModal.src === imagens[0].src) {
        imgNext.classList.remove('escondido');
        imgPrev.classList.add('escondido');
        modalLike.classList.add('primeira-foto');
        return;
    } else if (imgModal.src === imagens[lastIndice].src) {
        imgPrev.classList.remove('escondido');
        imgNext.classList.add('escondido');
        modalLike.classList.add('ultima-foto');
        return;
    } else {
        imgNext.classList.remove('escondido');
        imgPrev.classList.remove('escondido');
        modalLike.classList.remove('primeira-foto');
        modalLike.classList.remove('ultima-foto');

        return;
    }



}

function temLike() {
    const indice = arrayImagens.findIndex(imagem => imagem.src === imgModal.src);

    if (arrayLikes[indice].src) {
        modalLike.src = "/classe-01/assets/like.svg";
        return;
    } else {
        modalLike.src = '';
        return;
    }

}

























function mostrarMenu() {
    h1escondido.forEach(h1 => {
        h1.classList.remove('escondido');
    })

    menu.src = "/classe-01/assets/close-modal.svg";

    menu.removeEventListener('click', mostrarMenu);
    menu.addEventListener('click', esconderMenu);
}

function esconderMenu() {
    h1escondido.forEach(h1 => {
        h1.classList.add('escondido');
    })
    menu.src = "/classe-01/assets/closed-menu.svg"

    menu.removeEventListener('click', esconderMenu);
    menu.addEventListener('click', mostrarMenu);

}