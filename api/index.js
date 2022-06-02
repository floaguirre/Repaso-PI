
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require('axios');

// Para la precarga de nuestra DB cuando se levanta el server, se puede ejecutar la funcion getEpisodes() 
//que deberán armarla ustedes.
// Dicha función nos cargaría todos los personajes en nuestra DB una vez que se inicia el servidor. 
//Tener en cuenta que como es un pedido a la API, debería ser asíncrona.

async function getEpisodes() {
  
  await axios.get('http://localhost:3001/api/episodes');
    
  
  

}

conn.sync({ force: true }).then(() => {
  getEpisodes();
 
  server.listen(3001, () => {
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});
