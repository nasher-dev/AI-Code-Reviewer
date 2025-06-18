const express = require('express');
const app= express();
const aiRoutes = require('./routes/ai.routes');
const cors= require('cors');

app.use(cors()); // <-- Add this line to enable CORS

app.get('/', (req, res) => {
  res.send('Hello, Jyoti!');
});
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/ai', aiRoutes);

module.exports = app;