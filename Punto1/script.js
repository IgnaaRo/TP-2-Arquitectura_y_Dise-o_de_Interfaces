function desactivarAnimaciones() {
    document.body.classList.remove('animation');
  }
  
  function activarAnimaciones() {
    document.body.classList.add('animation');
  }

  function comprobarBateria() {
    navigator.getBattery().then(function(battery) {
      var Bateria = battery.level * 100;
  
      if (Bateria < 10 && !battery.charging) {
        desactivarAnimaciones();
      } else {
        activarAnimaciones();
      }
    });
  }
  
  window.addEventListener('DOMContentLoaded', comprobarBateria);
  navigator.getBattery().then(function(battery) {
    battery.addEventListener('levelchange', comprobarBateria);
    battery.addEventListener('chargingchange', comprobarBateria);
  });
  