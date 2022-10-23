const mongoose = require("mongoose");

const connection = () => {
    return mongoose
    .connect(process.env.connection_string)
    .then((result) => console.log("db connected"))
    .catch((error) => console.log(error))
}

module.exports = connection;