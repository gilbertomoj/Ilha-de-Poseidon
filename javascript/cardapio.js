const card = document.querySelector(".card-interno");

card.addEventListener("click", function () {
  card.classList.toggle('flip');
  card.classList.toggle('card2');
});

const pratos = document.querySelectorAll('ul.itens-cardapio li');

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

const redesSociais = document.querySelectorAll('ul.sociais li');

redesSociais.forEach(redeSocial=>{
    redeSocial.addEventListener("mouseover", function () {
        redeSocial.classList.add("hover-sociais");
    })
    redeSocial.addEventListener("mouseleave", function () {
        redeSocial.classList.remove("hover-sociais");    
    })
})
