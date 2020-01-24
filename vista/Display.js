class Display {
  getStudents = () => {
    const http = new XMLHttpRequest();
    const API_URL = "http://localhost:3000/estudiantes";

    http.open("GET", API_URL);
    http.send();
    http.onload = () => {
      if (http.status === 200) {
        const datos = JSON.parse(http.response);
        alert(JSON.stringify(datos));
        return datos;
      }
    };
  };

  drawPoints = () => {
    const http = new XMLHttpRequest();
    const API_URL = "http://localhost:3000/estudiantes";

    http.open("GET", API_URL);
    http.send();
    http.onload = () => {
      if (http.status === 200) {
        const datos = JSON.parse(http.response);
        const quito = [-0.17881, -78.468893];
        const mymap = L.map("mapa", { zoom: 12, center: quito });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          mymap
        );

        datos.forEach(item => {
          item.estudiante = L.marker([item.longitud, item.latitud]).bindPopup(
            item.descripcion
          );
          const ubicaciones = L.layerGroup([item.estudiante]).addTo(mymap);
        });
      }
    };
  };
}

const mostrar = new Display();

getStudents = () => {
  return mostrar.getStudents();
};

drawPoints = () => {
  return mostrar.drawPoints();
};
