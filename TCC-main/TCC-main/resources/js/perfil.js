//import './bootstrap';

//import Alpine from 'alpinejs';

//window.Alpine = Alpine;

//Alpine.start();
    
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