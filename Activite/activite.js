const mongoose = require('mongoose');

const ActiviteSchema = new mongoose.Schema({
    id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Activite' },
    utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  tache_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'tache' },

});

module.exports = mongoose.model('Activite', ActiviteSchema);
