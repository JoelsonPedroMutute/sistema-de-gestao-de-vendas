const express = require("express");
const cors = require("cors");

const authRoutes = require('./routes/auth.routes');


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.use('/api/companies', require('./routes/company.routes'));
module.exports = app;
