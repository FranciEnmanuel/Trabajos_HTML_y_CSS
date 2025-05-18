  function actualizarHora() {
    const ahora = new Date();
    const tiempo = ahora.toLocaleTimeString('es-ES', { hour12: false });
    document.getElementById('hora').textContent = tiempo;
  }
  setInterval(actualizarHora, 1000);
  actualizarHora(); 