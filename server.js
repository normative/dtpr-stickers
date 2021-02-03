/* eslint-disable */
const express = require('express');
const path = require('path');

const app = express();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const http = app.listen(PORT, HOST, (err) => {
  /* eslint no-console:0 */
  if (err) return console.error(err);
  const host = http.address().address;
  const { port } = http.address();

  return console.log(`Listening at ${host}:${port}`);
});
