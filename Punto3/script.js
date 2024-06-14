const toast = document.getElementById("toast");

    function showToast(message, icon) {
      toast.innerHTML = `<span class="icon ${icon}"></span> ${message}`;
      toast.className = "show";
      setTimeout(() => {
        toast.className = toast.className.replace("show", "");
      }, 3000);
    }

    function desactivarElementos() {
      document.querySelectorAll("a, button").forEach(element => {
        element.disabled = true;
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
      });
      document.querySelectorAll("audio, video").forEach(element => {
        element.pause();
        element.controls = false;
      });
      showToast("Conexión a Internet perdida", "offline-icon");
    }

    function reactivarElementos() {
      document.querySelectorAll("a, button").forEach(element => {
        element.disabled = false;
        element.style.pointerEvents = "auto";
        element.style.opacity = "1";
      });
      document.querySelectorAll("audio, video").forEach(element => {
        element.controls = true;
      });
      showToast("Conexión a Internet restablecida", "online-icon");
    }

    window.addEventListener("offline", desactivarElementos);
    window.addEventListener("online", reactivarElementos);