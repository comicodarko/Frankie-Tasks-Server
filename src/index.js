require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/frankie-tasks');

app.use('/public', express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀: ${PORT}`);
})