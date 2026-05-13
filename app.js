// Votre fichier app.js complet doit ressembler à ceci:
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Weather API - Welcome!' });
});

// Nouvel endpoint météo
app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  // Dans un cas réel, nous appellerions une API météo externe
  const mockWeatherData = {
    city: city,
    temperature: Math.floor(Math.random() * 30),
    conditions: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 100)
  };
  res.json(mockWeatherData);
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Weather API running on port ${port}`);
  });
}

// Exporter l'app pour les tests
module.exports = app;