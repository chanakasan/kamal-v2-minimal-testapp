const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

app.get('/up', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'up.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
