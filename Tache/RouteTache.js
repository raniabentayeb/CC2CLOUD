const express = require('express');
const router = express.Router();
const Tache = require('../Tache/Tache.js');


router.post('/Tache', async (req, res) => {
  try {
    const { titre, description, date_echeance, priorite } = req.body;

   
    const existingTache = await Tache.findOne({ titre });
    if (existingTache) {
      return res.status(400).json({ error: 'Le titre de la tâche doit être unique.' });
    }

    
    if (isNaN(priorite)) {
      return res.status(400).json({ error: 'La priorité doit être un nombre.' });
    }

    const newTache = new Tache({
      titre,
      description,
      date_echeance,
      priorite
    });

  
    await newTache.save();

    res.status(201).json(newTache);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout de la tâche.' });
  }
});


router.get('/Tache/:id', async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);
    if (!tache) {
      return res.status(404).json({ error: 'Tâche non trouvée.' });
    }
    res.json(tache);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des détails de la tâche.' });
  }
});

module.exports = router;