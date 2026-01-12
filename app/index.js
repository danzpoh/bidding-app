const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Bidding app running on port ${PORT}`);
});
