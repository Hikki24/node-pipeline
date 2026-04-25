const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>?? Node.js App v1.0</h1><p>Deployed via GitHub Actions</p>');
});

app.listen(port, () => console.log(`Running on port ${port}`));
