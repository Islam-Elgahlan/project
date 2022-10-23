const express = require('express')
const serverless = require('serverless-http');
const app = express()
const router = express.Router();
require('dotenv').config()
const port = process.env.port
const connection = require('./configuration/configurationDB');
const userRoutes = require("./modules/users/routes/user.routes");
const productsRoutes = require("./modules/product/routes/products.routes");

// router.get("/", (req, res) => {
//     res.json({
//       hello: "hi!"
//     });
//   });

app.use(express.json());
app.use(userRoutes);
app.use(productsRoutes);
app.use(`/.netlify/functions/api`, router);

connection(); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports.handler = serverless(app);