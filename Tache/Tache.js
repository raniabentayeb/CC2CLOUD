const mongoose = require('mongoose');

const TacheSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'tache' },
    titre: String,
  description: text,
  date_echeance: Date,
  priorite: String
});

module.exports = mongoose.model('Tache', TacheSchema);