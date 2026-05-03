const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const restaurantRoutes = require('./routes/restaurants');
const platRoutes = require('./routes/plats');
const commandeRoutes = require('./routes/commandes');
const errorHandler = require('./middleware/errorHandler');

<<<<<<< HEAD
// Charger les variables d'environnement (dans api/.env)
dotenv.config(); // <-- pas besoin de préciser le chemin si tu lances depuis api/

// Vérification
console.log("MONGODB_URI =", process.env.MONGODB_URI);
=======
// Charger .env seulement en développement local
// En Docker, les variables sont injectées par docker-compose
const path = require('path');
const fs = require('fs');
const envPath = path.resolve(__dirname, '../../.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}
>>>>>>> origin/feature/docker-config

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware globaux ---
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Routes ---
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API TerrangaFood 🍛',
    version: '0.0.0',
    endpoints: {
      restaurants: '/api/restaurants',
      plats: '/api/plats',
      commandes: '/api/commandes'
    }
  });
});

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/plats', platRoutes);
app.use('/api/commandes', commandeRoutes);

// --- Gestion des erreurs ---
app.use(errorHandler);

// ✅ Connexion MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connecté à MongoDB avec succès');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`📍 http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à MongoDB :', err.message);
    process.exit(1);
  });
<<<<<<< HEAD

module.exports = app;
=======
  //ok
module.exports = app;
>>>>>>> origin/feature/docker-config
