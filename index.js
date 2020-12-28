const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.ENV.PORT || 5000;
app.listen(PORT);
console.log(`The server is running on port:${PORT}`);
