const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet'); 

router.post('/pets', async (req, res) => {
  try {
    const { name, breed, age, gender } = req.body;

    const pet = new Pet({
      name,
      breed,
      age,
      gender,
    });

    await pet.save();
    res.status(201).json({ message: 'Pet profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create pet profile' });
  }
});

module.exports = router;