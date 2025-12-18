const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("API rodando.");
});