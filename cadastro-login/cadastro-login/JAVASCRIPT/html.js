function validaform()
{
dados = document.cadastro;

    if(dados.email.value=="" || dados.email.value.indexOf("@")==-1 || dados.email.value.indexOf(".")==-1)
    {
        alert("O campo "+ dados.email.name + " deve ser preechido corretamente!");
     dados.email.focus();
     return false
    }
}