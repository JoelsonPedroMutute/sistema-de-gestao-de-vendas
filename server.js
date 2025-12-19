require('dotenv').config(); // Carrega as variáveis do .env
const app = require("./src/app");
const connectedDb = require("./src/config/database");

const PORT = process.env.PORT || 3000;

// Conecta ao MongoDB antes de iniciar o servidor
connectedDb().then(() => {
    app.listen(PORT, () => {
        console.log(`API rodando na porta ${PORT}.`);
    });
}).catch((error) => {
    console.error("Falha ao conectar ao banco de dados:", error);
});
