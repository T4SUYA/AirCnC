const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require ('path');
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);
app.listen(port, function () {
    console.log(`Servidor executando em ${port}`)
  });


