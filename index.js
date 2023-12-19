require("dotenv").config();
const server = require("./src/app");
const cron = require('node-cron');
const axios = require('axios');
// const transporter = require("./src/Nodemailer/postEmail.js");
// const productMouckup = require("./src/Helpers/productMouckup.js");
const port = 3001;

cron.schedule('*/5 * * * *', async () => {
  try {
    // Realizar una solicitud GET utilizando Axios a la ruta '/ejecutar-accion'
    const response = await axios.get('http://localhost:3001/recohoy');
    console.log(response.data); // Mostrar la respuesta recibida
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
});

  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
