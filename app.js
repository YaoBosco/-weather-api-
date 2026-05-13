const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Weather API - Welcome!' });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Weather API running on port ${port}`);
  });
}

// Exporter l'app pour les tests
module.exports = app;