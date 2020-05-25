const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/notepad', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(routes);

app.listen(3000);
