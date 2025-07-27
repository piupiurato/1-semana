document.getElementById('surpresa').addEventListener('click', () => {
  // Mostrar a mensagem
  document.getElementById('mensagem').classList.remove('oculto');

  // Tocar o áudio
  const audio = document.getElementById('audioSurpresa');
  audio.play();
});
