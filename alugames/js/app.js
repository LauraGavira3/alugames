function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let mensagem = "";

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        mensagem = "Você devolveu o jogo!";
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        mensagem = "Você alugou o jogo!";
    }

    mostrarToast(mensagem);
}

function mostrarToast(texto) {
    let container = document.getElementById("toast-container");

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = texto;

    container.appendChild(toast);

    // força reflow pra animação rodar
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // remover depois de 10s
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400); // espera animação sumir
    }, 5000);
}



