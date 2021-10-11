//animação

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
 //alertas
 var botao = document.getElementById("cancelar");
 botao.addEventListener("click", function cancela(){
	alert("Sua reserva foi cancelada!!");
 })
function exibalert(){


	if(document.getElementById("nome").value==""){
		alert("Campo Nome obrigatório");
			document.getElementById("nome").focus();
			return false;
			}
	if(document.getElementById("email").value==""){
		alert("Campo Email obrigatório");
			document.getElementById("email").focus();
		    return false;
	
			}
	if(document.getElementById("pessoas").value==""){
		alert("Campo Número de pessoas obrigatório");
			document.getElementById("pessoas").focus();
			return false;
			
	}
	if(document.getElementById("data").value==""){
		alert("Campo Data obrigatório");
			document.getElementById("data").focus();
			return false;
			
	}
	if(document.getElementById("hora").value==""){
		alert("Campo do Horário obrigatório");
			document.getElementById("hora").focus();
			return false;
			
	}else{
		alert("Reserva feita com sucesso!");
	}

		

	return true;
};
