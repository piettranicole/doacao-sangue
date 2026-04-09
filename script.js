function validacao() {
    let valido = true;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;


if (nome.length === 0)  {
    alert ("informe seu nome");
    valido = false;
} else if (!nome.includes (" "))  {
    alert("O nome deve ter sobrenome");
    valido = false;
}

if (email.length === 0)  {
    alert ("informe seu email");
    valido = false;
} else if (!email.includes ("@") || !email.includes (".") )  {
    alert("O email deve ter um formato válido");
    valido = false;
}

if (cidade.length === 0)  {
    alert ("informe sua cidade");
    valido = false;
} 


if (estado.length === 0)  {
    alert ("informe seu estado");
    valido = false;
} 

if (telefone.length === 0)  {
    alert ("informe seu telefone");
    valido = false;
}else if (isNaN(telefone))  {
    alert ("informe seu telefone apenas com números");
    valido = false;
} 



if (idade.length === 0)  {
    alert ("informe sua idade");
    valido = false;
} else if (idade < 16)  {
    alert("você deve ter 16 anos ou mais para concluir o cadastro");
    valido = false;
}

if (peso.length === 0)  {
    alert ("informe seu peso");
    valido = false;
} else if (peso < 50)  {
    alert("Você deve ter o peso minimo de 50 kg para concluir o cadastro");
    valido = false;
}


if(tipo === "") {
    alert ("Selecione o tipo sanguineo")
    valido = false;
}


if (valido) {
    alert("Cadastro \n" +
    "Nome: "+ nome + "\n" +
    "email:" + email + "\n" +
    "telefone:" + telefone + "\n" +
    "cidade:" + cidade + "\n" +
    "estado:" + estado + "\n" +
    "idade:" + idade + "\n" +
    "peso:" + peso + "\n" +
    "tipo:" + tipo + "\n" );

}
}
