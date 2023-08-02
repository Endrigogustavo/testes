    // Função para contar checkboxes selecionadas e atualizar a tag <p>
    function updateCheckboxCount() {
        var checkboxes = document.querySelectorAll('.list-table tbody input[type="checkbox"]:checked');
        var count = checkboxes.length;
  
        var checkboxCountElement = document.getElementById('checkbox-count');
        checkboxCountElement.textContent = count + ' selecionado(s)';
  
        // Mostrar ou ocultar a tag <p> com base no número de checkboxes selecionadas
        checkboxCountElement.style.display = count > 0 ? 'block' : 'none';
      }
  
      // Adicionar evento de clique aos checkboxes
      var checkboxes = document.querySelectorAll('.list-table tbody input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', updateCheckboxCount);
      });
      
      // Adiciona classe "current" ao item de menu correspondente à seção atualmente visível
      function updateIndicator() {
        var sections = document.querySelectorAll('section');
        var indicatorLinks = document.querySelectorAll('#indicator a');
  
        sections.forEach(function (section) {
          var bounding = section.getBoundingClientRect();
          if (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
            var currentSectionId = section.getAttribute('id');
            indicatorLinks.forEach(function (link) {
              if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('current');
              } else {
                link.classList.remove('current');
              }
            });
          }
        });
      }
  
      document.addEventListener('scroll', updateIndicator);
      window.addEventListener('load', updateIndicator);
  
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

  