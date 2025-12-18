const mongoose = require("mongoose");

const connectedDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/sistema-de-gestao-de-vendas", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connectedDb;