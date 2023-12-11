require("dotenv").config();
const server = require("./src/app");
// const transporter = require("./src/Nodemailer/postEmail.js");
// const productMouckup = require("./src/Helpers/productMouckup.js");
const port = 3001;


  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
