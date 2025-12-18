const mongoose = require("mongoose");

const connectedDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
    }
};

module.exports = connectedDb;
