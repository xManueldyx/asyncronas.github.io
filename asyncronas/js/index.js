document.getElementById('loadImageBtn').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    var loadingMsg = document.createElement('p');
    loadingMsg.textContent = 'Cargando imagen...';
    imageContainer.appendChild(loadingMsg);
  
    var startTime = performance.now();
  
    var image = new Image();
    image.onload = function() {
      var endTime = performance.now();
      var loadTime = (endTime - startTime).toFixed(2);
      setTimeout(function() {
        loadingMsg.textContent = `La imagen se cargó en ${loadTime} milisegundos.`;
        imageContainer.appendChild(image);
        image.style.display = 'block';
      }, 1000); // Simulamos una demora de 1 segundo para la carga asincrónic.
    };
    image.src = '../imagenes/chivas.jpg'; // Ruta relativa de la imagen.
});
