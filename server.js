const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>? Node.js App v2.0</h1><p>Auto-updated by Watchtower!</p>');
});

app.listen(port, () => console.log(`Running on port ${port}`));
