const express = require('express');
const router = express.Router();
const Activite = require('../Activite/Activite.js ');
const Utilisateur = require('../auth-service/Utilisateur.js ');
const Tache = require('../Tache/Tache.js');


router.post('/Activite', async (req, res) => {
  try {
    const { id, utilisateur_id, tache_id, , utilisateurId, tacheId } = req.body;

    const utilisateur = await Utilisateur.findById(utilisateurId);
    if (!utilisateur) {
      return res.status(400).json({ error: 'L\'utilisateur spécifié n\'existe pas.' });
    }


    const tache = await Tache.findById(tacheId);
    if (!tache) {
      return res.status(400).json({ error: 'La tâche spécifiée n\'existe pas.' });
    }


  }
}
);

module.exports = router;