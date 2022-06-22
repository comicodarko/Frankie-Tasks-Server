const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/frankie-tasks')

app.use('/public', express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(4000, () => {
  console.log('🚀');
})