const express = require('express');
const Mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
Mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`The server is running on port:${PORT}`);
