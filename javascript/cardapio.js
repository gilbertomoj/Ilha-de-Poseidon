const card = document.querySelector(".card-interno");

card.addEventListener("click", function (e) {
  card.classList.toggle('flip');
});

pratos = document.querySelectorAll('ul.itens-cardapio li');

pratos.forEach(prato => {
    prato.addEventListener("mouseover", function () {
        prato.classList.add("hover");
        prato.querySelector("span").classList.remove("hide");
    })
    prato.addEventListener("mouseleave", function () {
        prato.classList.remove("hover");
        prato.querySelector("span").classList.add("hide");
    })
})

