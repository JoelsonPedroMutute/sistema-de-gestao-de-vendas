const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send("ola mundo!");
});

app.post('/pessoa', function (req, res) {
    console.log(req.body);
    res.json({
        "StatusCode": 200
    })
});

app.listen(3000, () => {
    console.log("API rodando.");
});
