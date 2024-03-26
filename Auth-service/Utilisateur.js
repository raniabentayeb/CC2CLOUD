const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    nom: String,
  email: String,
  login: String,
  mdp: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);