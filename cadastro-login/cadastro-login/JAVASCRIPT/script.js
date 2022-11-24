function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
Document.querySelector('.icon').src = "img/menu|_white_36dp.svg";
   }
   else
{
    menuMobile.classList.add('open');
    Document.querySelector('.icon').src = "img/close_white36dp.svg";
}
}

function verificar(nome,senha){
    var cont,chave=[], login=[];
  

    login[0]="Tabuada";
    login[1]="Retangulo";
    login[2]="Elevação";
    
    chave[0]="12345";
    chave[1]="48165";
    chave[2]="47524";
 
if (nome.value==login[0] && senha.value == chave[0]){
alert("Seu login foi confirmado");

}


else if (nome.value==login[1] && senha.value== chave[1]){
    alert("Seu login foi confirmado");
}

else if(nome.value==login[2] && senha.value==chave[2]){
alert("Seu login foi confirmado");
}
else {
var x = document.getElementById("#resultado");
x.show();

}



}