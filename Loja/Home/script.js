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