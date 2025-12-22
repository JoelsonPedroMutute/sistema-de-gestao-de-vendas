const express = require("express");
const cors = require("cors");

const authRoutes = require('./routes/auth.routes');


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.use('/api/companies', require('./routes/company.routes'));
app.use('/api/customers', require('./routes/customer.routes'));
app.use('/api/sellers', require('./routes/seller.routes'));
app.use('/api/sales', require('./routes/sale.routes'));
app.use('/api/users', require('./routes/user.routes'));

app.get('/', (req, res) => {
  res.json({
    message: 'API Sistema de Gestão de Vendas está online 🚀'
  });
});

module.exports = app;
