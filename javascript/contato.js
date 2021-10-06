//MENSAGEM DE VALIDAÇÃO DO FORM
enviarForm = () => {
    let formName = document.getElementById("name").value;
    let formEmail = document.getElementById("email").value;
    let formPhone = document.getElementById("phone").value;
    let formMsg = document.getElementById("mensagem").value;
    let formSelect = document.getElementById("estado").value;

    let spanName = document.getElementById("spanName")
    let spanEmail = document.getElementById("spanEmail")
    let spanTel = document.getElementById("spanTel")
    let spanMsg = document.getElementById("spanMsg")
    let spanAst = document.getElementById("spanAst")
    
    if(formName.length >= 5 && formEmail.length >= 5 && formPhone.length == 14 && formMsg.length >= 10 && formSelect != "") {
        pagina()
        //OCULTAR LOADING APÓS ALGUNS SEGUNDOS
        setTimeout(function () {
        let loader = document.getElementById("loader")
        $(loader).fadeOut('fast');
        }, 2000);
    }else{
        spanName.style.display = "flex";
        spanEmail.style.display = "flex";
        spanTel.style.display = "flex";
        spanMsg.style.display = "flex";
        spanAst.style.display = "flex";
    } 

    //MOSTRAR MENSAGEM APÓS OCULTAR LOADING
    setTimeout(function msgIn() {
        let msgEnviada = document.getElementById("txtEnviado")
        let btnNovoContato = document.getElementById("btnNovoContato")
        
        msgEnviada.style.display = 'flex';
        btnNovoContato.style.display = 'flex';
    }, 2300);
}

//MUDANÇA DE PÁGINA
function pagina(){
    let formulario = document.getElementById("form-contato")
    let msgEnviada = document.getElementById("enviado")
    let txtEnviado = document.getElementById("txtEnviado")
    let btnNovoContato = document.getElementById("btnNovoContato")

    formulario.style.display = "none";
    msgEnviada.style.display = "flex";    
    txtEnviado.style.display = 'none';
    btnNovoContato.style.display = 'none';
}

//PÁGINA DE AGRADECIMENTO >> NOVO CONTATO
function novoContato(){
    let formulario = document.getElementById("form-contato")
    let msgEnviada = document.getElementById("enviado")
    if(formulario.style.display == "none"){
        deleteError()
        formulario.reset()
        formulario.style.display = "block";
        msgEnviada.style.display = "none";
    } else {
    formulario.style.display = "none";
    }
}

//APAGAR AVISOS ANTERIORES
function deleteError() {
    let spanName = document.getElementById("spanName")
    let spanEmail = document.getElementById("spanEmail")
    let spanTel = document.getElementById("spanTel")
    let spanMsg = document.getElementById("spanMsg")
    let spanAst = document.getElementById("spanAst")

        spanName.style.display = "none";
        spanEmail.style.display = "none";
        spanTel.style.display = "none";
        spanMsg.style.display = "none";
        spanAst.style.display = "none";
}

