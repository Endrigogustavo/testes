window.onscroll = function() {scrollFunction()};
      var img = document.getElementById("logo");
      
      function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        img.src = "{{ asset('images/img_logo1.png') }}";
      } else {
        img.src = "{{ asset('images/img_logo.png') }}";
      }
    };

    var iconeUsuário = document.getElementById("iconeUsuário");
    iconeUsuário.addEventListener("click", trocarÍconeUsuário);
    
    var iconeCoração = document.getElementById("iconeCoração");
    iconeCoração.addEventListener("click", trocarÍconeCoração);

    function trocarÍconeCoração() {
      if (iconeCoração.classList.contains("fa-regular fa-heart")) {
        iconeCoração.classList.remove("fa-regular fa-heart");
        iconeCoração.classList.add("fa-solid fa-heart");
      } else {
        iconeCoração.classList.remove("fa-solid fa-heart");
        iconeCoração.classList.add("fa-regular fa-heart");
      }
    }

    function trocarÍconeUsuário() {
      if (iconeUsuário.classList.contains("fa-regular fa-user")) {
        iconeUsuário.classList.remove("fa-regular fa-user");
        iconeUsuário.classList.add("fa-solid fa-user");
      } else {
        iconeUsuário.classList.remove("fa-solid fa-user");
        iconeUsuário.classList.add("fa-regular fa-user");
      }
    }

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Adicione esta linha para mudar os slides automaticamente a cada 3 segundos
setInterval(() => plusSlides(1), 3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let squares = document.getElementsByClassName("square");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < squares.length; i++) {
    squares[i].className = squares[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  squares[slideIndex - 1].className += " active";
}

//Ícone look
function toggleLike(icon) {
  if (icon.classList.contains("fa-regular fa-heart")) {
    icon.classList.remove("fa-regular fa-heart");
    icon.classList.add("fa-solid fa-heart");
  } else {
    icon.classList.remove("fa-solid fa-heart");
    icon.classList.add("fa-regular fa-heart");
  }
}

//Seção 2 - Combinações e peças = look1
var slideIndexc = 1;
showSlidesc(slideIndexc);

function plusSlidesc(n) {
  showSlidesc(slideIndexc += n);
}

function currentSlidec(n) {
  showSlidesc(slideIndexc = n);
}

function showSlidesc(n) {
  var i;
  var slides = document.getElementsByClassName("slidec");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexc = 1;
  }
  if (n < 1) {
    slideIndexc = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexc - 1].style.display = "block";
  dots[slideIndexc - 1].className += " active";
}

function iconMouseOver(element) {
  element.classList.add("custom-icon-hover");
}

function iconMouseOut(element) {
  element.classList.remove("custom-icon-hover");
}

function iconClick(element) {
  element.classList.add("custom-icon-clicked");
  setTimeout(function() {
    element.classList.add("custom-icon-hidden");
    setTimeout(function() {
      element.classList.remove("custom-icon-clicked");
      element.classList.remove("custom-icon-hidden");
    }, 500);
  }, 300);
}

//Seção 2 - Combinações e peças = look2
var slideIndexcm = 1;
showSlidescm(slideIndexcm);

function plusSlidescm(n) {
  showSlidescm(slideIndexcm += n);
}

function currentSlidecm(n) {
  showSlidescm(slideIndexcm = n);
}

function showSlidescm(n) {
  var i;
  var slides = document.getElementsByClassName("slidecm");
  var dots = document.getElementsByClassName("dotm");
  if (n > slides.length) {
    slideIndexcm = 1;
  }
  if (n < 1) {
    slideIndexcm = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexcm - 1].style.display = "block";
  dots[slideIndexcm - 1].className += " active";
}

function iconMouseOverm(element) {
  element.classList.add("custom-iconm-hover");
}

function iconMouseOutm(element) {
  element.classList.remove("custom-iconm-hover");
}

function iconClickm(element) {
  element.classList.add("custom-iconm-clicked");
  setTimeoutm(function() {
    element.classList.add("custom-iconm-hidden");
    setTimeoutm(function() {
      element.classList.remove("custom-iconm-clicked");
      element.classList.remove("custom-iconm-hidden");
    }, 500);
  }, 300);
}

//Mudança das imagens 
var iconChanged = false;

var iconElement = document.getElementById("icon");
var overlay1Element = document.getElementById("iconoverlay1");
var ocasio1Element = document.getElementById("ocasiao1");
var estilo1Element = document.getElementById("estilo1");
var overlay2Element = document.getElementById("iconoverlay2");
var ocasio2Element = document.getElementById("ocasiao2");
var estilo2Element = document.getElementById("estilo2");

const customicon1 = document.getElementById('customicon1');
const customicon2 = document.getElementById('customicon2');
const customicon3 = document.getElementById('customicon3');
const customiconm1 = document.getElementById('customiconm1');
const customiconm2 = document.getElementById('customiconm2');
const customiconm3 = document.getElementById('customiconm3');


function toggleIcon() {
  var iconElement = document.getElementById("icon");
  if (iconChanged) {
    iconElement.classList.remove("fa-sharp", "fa-solid", "fa-person-dress", "icon");
    iconElement.classList.add("fa-sharp", "fa-solid", "fa-person", "icon");
    document.getElementById("title1-tc").innerText = "Triângulo";
    document.getElementById("title2-tc").innerText = "Triângulo Invertido";
    document.getElementById("title3-tc").innerText = "Retângulo";
    document.getElementById("title4-tc").innerText = "Ampulheta";
    document.getElementById("title5-tc").innerText = "Oval";

    customicon1.style.marginLeft = '0px';
    customicon1.style.marginTop = '0px';
    customicon2.style.marginLeft = '0px';
    customicon2.style.marginTop = '0px';
    customicon3.style.marginLeft = '0px';
    customicon3.style.marginTop = '0px';
    customiconm1.style.marginLeft = '0px';
    customiconm1.style.marginTop = '0px';
    customiconm2.style.marginLeft = '0px';
    customiconm2.style.marginTop = '0px';
    customiconm3.style.marginLeft = '0px';
    customiconm3.style.marginTop = '0px';

    document.getElementById("desc_look1").innerText = "Descrição 4: Imagem adicionada fora do slideshow.";
    document.getElementById("desc_1-look1").innerText = "Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.";
    document.getElementById("desc_2-look1").innerText = "Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.";
    document.getElementById("desc_3-look1").innerText = "Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.";

    document.getElementById("desc_look2").innerText = "Descrição 4: Imagem adicionada fora do slideshow.";
    document.getElementById("desc_1-look2").innerText = "Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.";
    document.getElementById("desc_2-look2").innerText = "Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.";
    document.getElementById("desc_3-look2").innerText = "Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.";

    ocasio1Element.innerText = "Executiva";
    estilo1Element.innerText = "Elegante";

    ocasio2Element.innerText = "Executiva";
    estilo2Element.innerText = "Elegante";

    ocasio1Element.style.backgroundColor = '#FF4E50';
    estilo1Element.style.backgroundColor = '#3498DB;';

    ocasio2Element.style.backgroundColor = '#FF4E50';
    estilo2Element.style.backgroundColor = '#3498DB;';
   
    overlay1Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/>';
    overlay1Element.style.backgroundColor = '#16a51d';

    overlay2Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/>';
    overlay2Element.style.backgroundColor = '#16a51d';

  } else {
    iconElement.classList.remove("fa-sharp", "fa-solid", "fa-person", "icon");
    iconElement.classList.add("fa-sharp", "fa-solid", "fa-person-dress", "icon");
    document.getElementById("title1-tc").innerText = "Triângulo";
    document.getElementById("title2-tc").innerText = "Triângulo Invertido";
    document.getElementById("title3-tc").innerText = "Retângulo";
    document.getElementById("title4-tc").innerText = "Trapézio";
    document.getElementById("title5-tc").innerText = "Oval";
    
    
    customicon1.style.marginLeft = '-80px';
    customicon1.style.marginTop = '-95px';
    customicon2.style.marginLeft = '-90px';
    customicon2.style.marginTop = '-350px';
    customicon3.style.marginLeft = '-400px';
    customicon3.style.marginTop = '-140px';

    customiconm1.style.marginLeft = '310px';
    customiconm1.style.marginTop = '-45px';
    customiconm2.style.marginLeft = '330px';
    customiconm2.style.marginTop = '200px';
    customiconm3.style.marginLeft = '335px';
    customiconm3.style.marginTop = '460px';

    document.getElementById("desc_look1").innerText = "Nova descrição do look 1";
    document.getElementById("desc_1-look1").innerText = "Nova descrição da peça 1 do look 1";
    document.getElementById("desc_2-look1").innerText = "Nova descrição da peça 2 do look 1";
    document.getElementById("desc_3-look1").innerText = "Nova descrição da peça 3 do look 1";

    document.getElementById("desc_look2").innerText = "Nova descrição do look 2";
    document.getElementById("desc_1-look2").innerText = "Nova descrição da peça 1 do look 2";
    document.getElementById("desc_2-look2").innerText = "Nova descrição da peça 2 do look 2";
    document.getElementById("desc_3-look2").innerText = "Nova descrição da peça 3 do look 2";
    
    ocasio1Element.innerText = "Dia a Dia";
    estilo1Element.innerText = "Esportiva";

    ocasio2Element.innerText = "Dia a Dia";
    estilo2Element.innerText = "Esportiva";

    ocasio1Element.style.backgroundColor = '#45a049';
    estilo1Element.style.backgroundColor = '#FF4E50';

    ocasio2Element.style.backgroundColor = '#45a049';
    estilo2Element.style.backgroundColor = '#FF4E50';
        
    overlay1Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/give-way.png" alt="give-way"/>';
    overlay1Element.style.backgroundColor = '#5820c0';

    overlay2Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/give-way.png" alt="give-way"/>';
    overlay2Element.style.backgroundColor = '#5820c0';
      
  }
  iconChanged = !iconChanged;

  if (iconChanged) {
    document.getElementById("look1").src = "associate/img/look1-masc.png";
    document.getElementById("peca1").src = "associate/img/peca1-masc.png";
    document.getElementById("peca2").src = "associate/img/peca2-masc.png";
    document.getElementById("peca3").src = "associate/img/peca3-masc.png";

    document.getElementById("look2").src = "associate/img/look2-masc.png";
    document.getElementById("peca1-look2").src = "associate/img/peca1-look2-masc.png";
    document.getElementById("peca2-look2").src = "associate/img/peca2-look2-masc.png";
    document.getElementById("peca3-look2").src = "associate/img/peca3-look2-masc.png";

    document.getElementById("image1-tc").src = "associate/img/triangulo-masc.png";
    document.getElementById("image2-tc").src = "associate/img/trianguloinvertido-masc.png";
    document.getElementById("image3-tc").src = "associate/img/retangulo-masc.png";
    document.getElementById("image4-tc").src = "associate/img/trapezio-masc.png";
    document.getElementById("image5-tc").src = "associate/img/oval-masc.png";

    document.getElementById("image1-e").src = "associate/img/esportivo-masc.png";
    document.getElementById("image2-e").src = "associate/img/romantico-masc.png";
    document.getElementById("image3-e").src = "associate/img/classico-masc.png";
    document.getElementById("image4-e").src = "associate/img/elegante-masc.png";
    document.getElementById("image5-e").src = "associate/img/criativo-masc.png";
    document.getElementById("image6-e").src = "associate/img/dramatico-masc.png";
    document.getElementById("image7-e").src = "associate/img/sexy-masc.png";

    customicon1.style.marginLeft = '-165px';
    customicon1.style.marginTop = '-205px';
    customicon2.style.marginLeft = '-185px';
    customicon2.style.marginTop = '-705px';
    customicon3.style.marginLeft = '-280px';
    customicon3.style.marginTop = '-400px';

    customiconm1.style.marginLeft = '-115px';
    customiconm1.style.marginTop = '-85px';
    customiconm2.style.marginLeft = '-20px';
    customiconm2.style.marginTop = '170px';
    customiconm3.style.marginLeft = '105px';
    customiconm3.style.marginTop = '28px';

    document.getElementById("desc_look1").innerText = "Nova descrição do look 1";
    document.getElementById("desc_1-look1").innerText = "Nova descrição da peça 1 do look 1";
    document.getElementById("desc_2-look1").innerText = "Nova descrição da peça 2 do look 1";
    document.getElementById("desc_3-look1").innerText = "Nova descrição da peça 3 do look 1";

    document.getElementById("desc_look2").innerText = "Nova descrição do look 2";
    document.getElementById("desc_1-look2").innerText = "Nova descrição da peça 1 do look 2";
    document.getElementById("desc_2-look2").innerText = "Nova descrição da peça 2 do look 2";
    document.getElementById("desc_3-look2").innerText = "Nova descrição da peça 3 do look 2";

    ocasio1Element.innerText = "Dia a Dia";
    estilo1Element.innerText = "Esportiva";

    ocasio2Element.innerText = "Dia a Dia";
    estilo2Element.innerText = "Esportiva";

    ocasio1Element.style.backgroundColor = '#45a049';
    estilo1Element.style.backgroundColor = '#FF4E50';

    ocasio2Element.style.backgroundColor = '#45a049';
    estilo2Element.style.backgroundColor = '#FF4E50';
        
    overlay1Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/give-way.png" alt="give-way"/>';
    overlay1Element.style.backgroundColor = '#5820c0';

    overlay2Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/give-way.png" alt="give-way"/>';
    overlay2Element.style.backgroundColor = '#5820c0';
      
  } else {
    document.getElementById("look1").src = "associate/img/look1.png";
    document.getElementById("peca1").src = "associate/img/peca1.png";
    document.getElementById("peca2").src = "associate/img/peca2.png";
    document.getElementById("peca3").src = "associate/img/peca3.png";

    document.getElementById("look2").src = "associate/img/look2.png";
    document.getElementById("peca1-look2").src = "associate/img/peca1-look2.png";
    document.getElementById("peca2-look2").src = "associate/img/peca2-look2.png";
    document.getElementById("peca3-look2").src = "associate/img/peca3-look2.png";

    document.getElementById("image1-tc").src = "associate/img/triangulo.png";
    document.getElementById("image2-tc").src = "associate/img/trianguloinvertido.png";
    document.getElementById("image3-tc").src = "associate/img/retangulo.png";
    document.getElementById("image4-tc").src = "associate/img/ampulheta.png";
    document.getElementById("image5-tc").src = "associate/img/oval.png";

    document.getElementById("image1-e").src = "associate/img/esportivo.png";
    document.getElementById("image2-e").src = "associate/img/romantico.png";
    document.getElementById("image3-e").src = "associate/img/classico.png";
    document.getElementById("image4-e").src = "associate/img/elegante.png";
    document.getElementById("image5-e").src = "associate/img/criativo.png";
    document.getElementById("image6-e").src = "associate/img/dramatico.png";
    document.getElementById("image7-e").src = "associate/img/sexy.png";

    customicon1.style.marginLeft = '0px';
    customicon1.style.marginTop = '0px';
    customicon2.style.marginLeft = '0px';
    customicon2.style.marginTop = '0px';
    customicon3.style.marginLeft = '0px';
    customicon3.style.marginTop = '0px';
    customiconm1.style.marginLeft = '0px';
    customiconm1.style.marginTop = '0px';
    customiconm2.style.marginLeft = '0px';
    customiconm2.style.marginTop = '0px';
    customiconm3.style.marginLeft = '0px';
    customiconm3.style.marginTop = '0px';

    document.getElementById("desc_look1").innerText = "Descrição 4: Imagem adicionada fora do slideshow.";
    document.getElementById("desc_1-look1").innerText = "Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.";
    document.getElementById("desc_2-look1").innerText = "Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.";
    document.getElementById("desc_3-look1").innerText = "Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.";

    document.getElementById("desc_look2").innerText = "Descrição 4: Imagem adicionada fora do slideshow.";
    document.getElementById("desc_1-look2").innerText = "Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.";
    document.getElementById("desc_2-look2").innerText = "Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.";
    document.getElementById("desc_3-look2").innerText = "Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.";

    ocasio1Element.innerText = "Executiva";
    estilo1Element.innerText = "Elegante";

    ocasio1Element.innerText = "Executiva";
    estilo1Element.innerText = "Elegante";

    ocasio2Element.style.backgroundColor = '#FF4E50;';
    estilo2Element.style.backgroundColor = '#3498DB';

    ocasio2Element.style.backgroundColor = '#FF4E50;';
    estilo2Element.style.backgroundColor = '#3498DB';
   
    overlay1Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/>';
    overlay1Element.style.backgroundColor = '#16a51d';

    overlay2Element.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/>';
    overlay2Element.style.backgroundColor = '#16a51d';
  }
}