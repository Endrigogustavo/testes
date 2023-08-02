<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Veste-Me</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

        <!-- Styles -->
        @vite([
        'resources/css/app.css',
        'resources/js/app.js',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js'    
        ])
    </head>
    <body>

<div id="navbar" class="center">
  <img class="logo_principal" id="logo" src="{{ asset('images/img_logo.png') }}" alt="img_logo">
    <div class="icone-container">
      <div class="button-container">
        <i id="icon" class="fa-sharp fa-solid fa-person icon" aria-hidden="true" onclick="toggleIcon()"></i>
      
      <i href="#default" id="iconeCoração" class="icone fa-regular fa-heart" ></i>
      <i href="#default" id="iconeUsuário" class="icone fa-regular fa-user" ></i>
      <br>
      @if (Route::has('login'))
                <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                    @auth
                        <a href="{{ url('/dashboard') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Perfil</a>
                    @else
                        <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
  </div>
</div>  
    <div id="navbar-bottom">
  <div class="linha"></div>
  <a class="active" href="#produtos">TODOS OS PRODUTOS</a>
  <a href="#executivos">EXECUTIVOS</a>
  <a href="#esportivos">ESPORTIVOS</a>
  <a href="#comemoracoes">COMEMORAÇÕES</a>
  <a href="#diaadia">DIA A DIA</a>
  <a href="#modapraia">MODA PRAIA</a>
  <div class="topnav">
    <div class="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Procurar" name="search">
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  </div>
</div>
</div>


<!-- Slideshow -->
<div class="slideshow-container">
  <div class="slide">
    <img src="associate/img/banner1.png" style="width:100%">
  </div>

  <div class="slide">
    <img src="associate/img/banner2.png" style="width:100%">
  </div>

  <div class="slide">
    <img src="associate/img/banner3.png" style="width:100%">
  </div>

  <div class="slide">
    <img src="associate/img/banner4.png" style="width:100%">
  </div>

  <div class="slide">
    <img src="associate/img/banner5.png" style="width:100%">
  </div>

  
  <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>

  <div class="slide-pagination">
    <div class="square active" onclick="currentSlide(1)"></div>
    <div class="square" onclick="currentSlide(2)"></div>
    <div class="square" onclick="currentSlide(3)"></div>
    <div class="square" onclick="currentSlide(4)"></div>
    <div class="square" onclick="currentSlide(5)"></div>
  </div>
</div>

<!-- Seção 2 - Combinação e suas peças -->
<div class="w3-row" id="grid-comb">

  <div class="col-lg-12 col-12">
    <div class="section-title-wrap mb-5">
      <img class="logo_ident" id="logo_ident" src="associate/img/img_logo.png" alt="img_logo">
      <h2 class="section-title"><b>OCASIÃO EXECUTIVA</b></h2>
    </div>
  </div>

  <!-- Seção 2 - Look1 -->
  <div class="container-comb">
    <div class="image-container-comb">
      <img id="look1" src="associate/img/look1.png" alt="Imagem 4">

      <div class="icon-overlay1">
        <div id="iconoverlay1" class="icon-overlay1"><img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/> 
          <!-- style="margin-top: 376px; left: 62px; background-color: #45a049;"-->
      </div>
        </div>

      <p id="desc_look1">Descrição 4: Imagem adicionada fora do slideshow.</p>

      <div class="icones-containerc">
        <i class="icone_ fa-regular fa-heart" onclick="toggleLike(this)"></i>
        <i class="icone_ fa-solid fa-share-nodes" onclick="shareImage()"></i>
      </div>
    </div>
    
    <div id="ocasiao1" class="card ocasiao1-card" style="top: 1318px; left: 125px; background-color: #FF4E50;">
      <p>EXECUTIVO</p>
    </div>
    <div id="estilo1" class="card estilo1-card" style="top: 1875px; left: 185px; background-color: #3498DB;">
      <p>ELEGANTE</p>
    </div>

      <div class="slideshow-containerc">
        <div class="slidec">
          <img id="peca1" src="associate/img/peca1.png" alt="Imagem 1">
          <p id="desc_1-look1">Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.</p>
        </div>
    
        <div class="slidec">
          <img id="peca2" src="associate/img/peca2.png" alt="Imagem 2">
          <p id="desc_2-look1">Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.</p>
        </div>
    
        <div class="slidec">
          <img id="peca3" src="associate/img/peca3.png" alt="Imagem 3">
          <p id="desc_3-look1">Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.</p>
        </div>
    
        <a class="prevc" onclick="plusSlidesc(-1)"><i class="fa-sharp fa-solid fa-chevron-up" aria-hidden="true"></i></a>
        <a class="nextc" onclick="plusSlidesc(1)"><i class="fa-sharp fa-solid fa-chevron-down" aria-hidden="true"></i></a>
    
        <div class="dot-container">
          <span class="dot" id="dot_quad" onclick="currentSlidec(1)"></span>
          <span class="dot" id="dot_quad" onclick="currentSlidec(2)"></span>
          <span class="dot" id="dot_quad" onclick="currentSlidec(3)"></span>
        </div>
        
 
        <div class="dot-container" style="top: 150px; left: -150px;">
          <span class="dot" onclick="currentSlidec(1)">
            <i id="customicon1" class="fa-solid fa-circle-plus custom-icon" aria-hidden="true" onmouseover="iconMouseOver(this)" onmouseout="iconMouseOut(this)" onclick="iconClick(this)"></i>
          </span>
        </div>
        
        <div class="dot-container" style="top: 285px; left: -200px;">
          <span class="dot" onclick="currentSlidec(2)">
            <i id="customicon2" class="fa-solid fa-circle-plus custom-icon" aria-hidden="true" onmouseover="iconMouseOver(this)" onmouseout="iconMouseOut(this)" onclick="iconClick(this)"></i>
          </span>
        </div>
        
        <div class="dot-container" style="top: 350px; left: -130px;">
          <span class="dot" onclick="currentSlidec(3)">
            <i id="customicon3" class="fa-solid fa-circle-plus custom-icon" aria-hidden="true" onmouseover="iconMouseOver(this)" onmouseout="iconMouseOut(this)" onclick="iconClick(this)"></i>
          </span>
        </div>
    
      </div>

   <!-- Seção 2 - Look2 -->
        <div class="slideshow-containercm">
          <a class="prevcm" onclick="plusSlidescm(-1)"><i class="fa-sharp fa-solid fa-chevron-up" aria-hidden="true"></i></a>
          <a class="nextcm" onclick="plusSlidescm(1)"><i class="fa-sharp fa-solid fa-chevron-down" aria-hidden="true"></i></a>
      
          <div class="dotm-container">
            <span class="dotm" id="dotm_quad" onclick="currentSlidecm(1)"></span>
            <span class="dotm" id="dotm_quad" onclick="currentSlidecm(2)"></span>
            <span class="dotm" id="dotm_quad" onclick="currentSlidecm(3)"></span>
          </div>

          <div class="dotm-container" style="top: -5px; left: 360px;">
            <span class="dotm" onclick="currentSlidecm(1)">
              <i id="customiconm1" class="fa-solid fa-circle-plus custom-iconm" aria-hidden="true" onmouseover="iconMouseOverm(this)" onmouseout="iconMouseOutm(this)" onclick="iconClickm(this)"></i>
            </span>
          </div>
          
          <div class="dotm-container" style="top: 105px; left: 335px;">
            <span class="dotm" onclick="currentSlidecm(2)">
              <i id="customiconm2" class="fa-solid fa-circle-plus custom-iconm" aria-hidden="true" onmouseover="iconMouseOverm(this)" onmouseout="iconMouseOutm(this)" onclick="iconClickm(this)"></i>
            </span>
          </div>
          
          <div class="dotm-container" style="top: 460px; left: 265px;">
            <span class="dotm" onclick="currentSlidecm(3)">
              <i id="customiconm3" class="fa-solid fa-circle-plus custom-iconm" aria-hidden="true" onmouseover="iconMouseOverm(this)" onmouseout="iconMouseOutm(this)" onclick="iconClickm(this)"></i>
            </span>
          </div>

          <div class="slidecm">
            <img id="peca1-look2" src="associate/img/peca1-look2.png" alt="Imagem 1">
            <p id="desc_1-look2">Descrição 1: Bela paisagem natural com montanhas majestosas e um lago sereno.</p>
          </div>
      
          <div class="slidecm">
            <img id="peca2-look2" src="associate/img/peca2-look2.png" alt="Imagem 2">
            <p id="desc_2-look2">Descrição 2: Uma deliciosa refeição gourmet preparada com ingredientes frescos e coloridos.</p>
          </div>
      
          <div class="slidecm">
            <img id="peca3-look2" src="associate/img/peca3-look2.png" alt="Imagem 3">
            <p id="desc_3-look2">Descrição 3: Um grupo diversificado de pessoas sorrindo e interagindo em um ambiente de trabalho colaborativo.</p>
          </div>
        </div>
  
        <div class="image-container-combm">
          <img id="look2" src="associate/img/look2.png" alt="Imagem 4">

          <div class="icon-overlay2">
            <div id="iconoverlay2" class="icon-overlay2"><img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/empty-hourglass.png" alt="empty-hourglass"/> 
              <!-- style="top: 476px; left: 62px; background-color: #45a049;"-->
          </div>
            </div>

          <p id="desc_look2">Descrição 4: Imagem adicionada fora do slideshow.</p>
      
          <div class="icones-containercm">
            <i class="icone_ fa fa-regular fa-heart" onclick="toggleLike(this)"></i>
            <i class="icone_ fa fa-solid fa-share-nodes" onclick="shareImage()"></i>
        </div>

        <div id="ocasiao2" class="card ocasiao2-card" style="top: 1318px; left: 1445px; background-color: #FF4E50;">
          <p>EXECUTIVO</p>
        </div>
        <div id="estilo2" class="card estilo2-card" style="top: 1875px; left: 1385px; background-color: #3498DB;">
          <p>ELEGANTE</p>
        </div>
      </div>

    </div>

</div>

<!-- Tipos Corporais -->
<div class="col-lg-12 col-12">
  <div class="section-title-wrap-2 mb-5">
    <img class="logo_ident-2" id="logo_ident" src="associate/img/img_logo.png" alt="img_logo" style="margin-left: 400px;">
      <h2 class="section-title-2"><b>VALORIZE SEU CORPO</b></h2>
    <div class="section-title-2-menor mb-5">
      <h2 class="section-title-2" style="font-size: 18px; text-align: left; margin-left: 440px; margin-right: 20px;"><b>Qual é meu tipo corporal?</b></h2>
      <button class="button">Clique aqui e descubra!</button>
    </div>
  </div>

  <div class="image-container">
    <div>
      <h2 id="title1-tc" class="titulo-tc1">Triângulo</h2>
      <img id="image1-tc" class="img_tc" src="associate/img/triangulo.png" alt="Imagem 1">
    </div>
    <div>
      <h2 id="title2-tc" class="titulo-tc1">Triângulo Invertido</h2>
      <img id="image2-tc" class="img_tc" src="associate/img/trianguloinvertido.png" alt="Imagem 2">
    </div>
    <div>
      <h2 id="title3-tc" class="titulo-tc1">Retângulo</h2>
      <img id="image3-tc" class="img_tc" src="associate/img/retangulo.png" alt="Imagem 3">
    </div>
    <div>
      <h2 id="title4-tc" class="titulo-tc1">Ampulheta</h2>
      <img id="image4-tc" class="img_tc" src="associate/img/ampulheta.png" alt="Imagem 4">
    </div>
    <div>
      <h2 id="title5-tc" class="titulo-tc1">Oval</h2>
      <img id="image5-tc" class="img_tc" src="associate/img/oval.png" alt="Imagem 5">
    </div>
  </div>


  </div>

<!-- Estilos Universais -->
<div class="col-lg-12 col-12">
  <div class="section-title-wrap-3 mb-5">
    <img class="logo_ident-3" id="logo_ident" src="associate/img/img_logo.png" alt="img_logo" style="margin-left: 400px;">
      <h2 class="section-title-3"><b>ESTILOS UNIVERSAIS</b></h2>
  </div>

<div class="image-container-e">
  <div>

    <img id="image1-e" class="img_e" src="associate/img/esportivo.png" alt="Imagem 1">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Esportivo</h2>
  </div>
  <div>

    <img id="image2-e" class="img_e" src="associate/img/romantico.png" alt="Imagem 2">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Romântico</h2>
  </div>
  <div>

    <img id="image3-e" class="img_e" src="associate/img/classico.png" alt="Imagem 3">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Clássico</h2>
  </div>
  <div>

    <img id="image4-e" class="img_e" src="associate/img/elegante.png" alt="Imagem 4">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Elegante</h2>
  </div>
  <div>

    <img id="image5-e" class="img_e" src="associate/img/criativo.png" alt="Imagem 5">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Criativo</h2>
  </div>
  <div>

    <img id="image6-e" class="img_e" src="associate/img/dramatico.png" alt="Imagem 5">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Dramático</h2>
  </div>
  <div>

    <img id="image7-e" class="img_e" src="associate/img/sexy.png" alt="Imagem 5">
    <h2 class="titulo-e1" >Estilo</h2>
    <h2 class="titulo-e2" >Sexy</h2>
  </div>
</div>
</div>

<!-- Sobre Nós -->
  <div class="w3-row w3-container" style="margin-top: -180px; margin-right: 150px; margin-left: 150px; margin-bottom: 200px;">
    <div class="w3-center w3-padding-64">
      <h3 class="titulo-sn">Conheça nossa</h3>
      <span class="w3-xxxlarge w3-bottombar w3-border-black w3-padding-16">história</span>
    </div>
    <div class="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
      <h3>Design</h3>
      <p class="desc-sn">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-grey w3-container w3-padding-16">
      <h3>Branding</h3>
      <p class="desc-sn">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
      <h3>Consultation</h3>
      <p class="desc-sn">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-black w3-container w3-padding-16">
      <h3>Promises</h3>
      <p class="desc-sn">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>
  </div>

<!-- Criadores -->
<div class="col-lg-12 col-12">
  <div class="section-title-wrap-c mb-5">
      <h2 class="section-title-c"><b>Criadores</b></h2>
  </div>

<div class="w3-row-padding"  id="criadores" style="width:80%; margin-left: 300px;">
  <div class="w3-col l3 m6 w3-margin-bottom">
    <img src="associate/img/davi.PNG" alt="Davi" style="width:100%;">
    <h3>Davi Rodrigues Costa Souza</h3>
    <p class="w3-opacity">Estudante</p>
    <p>18 anos, estudante de Desenvolvimento de Sistemas do 3° DS A da Etec Zona Leste.</p>
    <p><button class="w3-button w3-light-grey w3-block">Contato</button></p>
  </div>
  <div class="w3-col l3 m6 w3-margin-bottom">
    <img src="associate/img/gabi.png" alt="Gabi" style="width:100%">
    <h3>Gabriela Souza Correia</h3>
    <p class="w3-opacity">Estudante</p>
    <p>18 anos, estudante de Desenvolvimento de Sistemas do 3° DS A da Etec Zona Leste.</p>
    <p><button class="w3-button w3-light-grey w3-block">Contato</button></p>
  </div>
  <div class="w3-col l3 m6 w3-margin-bottom">
    <img src="associate/img/isa.jpg" alt="Isa" style="width:100%">
    <h3>Isabela Souza Correia</h3>
    <p class="w3-opacity">Estudante</p>
    <p>18 anos, estudante de Desenvolvimento de Sistemas do 3° DS A da Etec Zona Leste.</p>
    <p><button class="w3-button w3-light-grey w3-block">Contato</button></p>
  </div>
</div>

<!-- Footer -->
<footer>
  <div class="linha-footer"></div>
  <div class="container-footer">
    <div>
      <h2 class="desc-footer1" href="Menu - versão 1.html#titulo-sn">Conheça nossa história</h2>
    </div>

    <div>
      <h2 class="desc-footer2">Todos os direitos reservados</h2>
    </div>

    <div>
      <img class="logo_branca" id="logo_branca" src="associate/img/logo_branca.png" alt="logo_branca" href="Menu - versão 1.html">
    </div>

    <div>
      <h2 class="desc-footer3">CONTATOS: <a href="mailto:veste_me@hotmail.com">veste_me@hotmail.com</a></h2>
    </div>

    <div>
      <h2 class="desc-footer4"><a href="https://www.instagram.com/">@veste-me</a></h2>
    </div>

  </div>
  <div class="linha-footer"></div>
</footer>

<p class="titulo-footer">Veste-me | São Paulo - SP</p>
<p class="titulo-footer">Davi Rodrigues Costa Souza | Gabriela Souza Correia | Isabela Souza Correia</p>

    </body>
</html>
