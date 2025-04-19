// Array de imágenes y sonidos aleatorios
const images = ['random-1.png', 'random-2.png', 'random-3.png', 'random-4.png', 'random-5.png'];
const sounds = ['sonido-1.mp3', 'sonido-2.mp3', 'sonido-3.mp3', 'sonido-4.mp3', 'sonido-5.mp3'];

// Selección aleatoria de imagen y sonido
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
const randomSound = sounds[randomIndex];

// Asignar la imagen aleatoria al contenedor
document.getElementById('random-img').src = randomImage;

// Añadir el evento de clic para reproducir el sonido
document.getElementById('random-image').addEventListener('click', function() {
  var audio = new Audio(randomSound); // Cargar sonido correspondiente
  audio.play();
});
