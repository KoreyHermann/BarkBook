const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/barkbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(fileUpload());

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  gender: String,
  photo: String,
});
const Pet = mongoose.model('Pet', petSchema);

app.post('/api/pets', (req, res) => {
  if (!req.files || !req.files.photo) {
    return res.status(400).json({ error: 'No photo uploaded'})}
});