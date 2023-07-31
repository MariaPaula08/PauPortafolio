// Obtén el botón y la lista desplegable
const dropdownButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Agrega un evento clic al botón
dropdownButton.addEventListener('click', function() {
  // Si la lista desplegable ya está abierta, ciérrala
  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
  } else {
    // Si la lista desplegable está cerrada, ábrela
    dropdownMenu.classList.add('show');
  }
});
