document.addEventListener("DOMContentLoaded", function() {
  let boton = document.getElementById("boton");

  boton.addEventListener("click", function() {
      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;
      let grupo = document.getElementById("grupo").value;
      let sala = document.getElementById("sala").value;

      let data = {
          nombre,
          apellido,
          grupo,
          sala
      };

      fetch("https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275", {
          method: "POST",
          mode: "cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
      })
      .then(response => {
          if (response.ok) {
              alert("Enviado");
              document.getElementById("nombre").value = "";
              document.getElementById("apellido").value = "";
              document.getElementById("grupo").value = "";
              document.getElementById("sala").value = "";
          } else {
              alert("Error al enviar los datos");
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  });
});