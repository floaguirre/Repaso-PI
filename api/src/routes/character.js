const {Character, Episode} = require('../db');
const { Router} = require('express');
const axios = require('axios');

const router = Router();

// [ ] POST /character:
// Recibe los datos recolectados por body desde el formulario controlado de la ruta de creación de personaje
// Crea un personaje en la base de datos
router.post('/' , async (req, res, next) => {
    try {
        const {name, species, origin, image, created, episodes} = req.body;
        const newCharacter = await Character.create({
            name,
            species,
            origin,
            image, 
            created
        })
        await newCharacter.addEpisode(episodes)

        res.status(201).send(newCharacter);

        
        
    } catch (error) {
        next(error)
        
    }

})

//relacionar Character con Episode

router.post('/:characterId/episodes/:episodeId', async (req, res, next) => {
    try {
        const {characterId, episodeId} = req.params;
        const character = await Character.findByPk(characterId);
        await character.addEpisode(episodeId)
        res.send(200)
        
    } catch (error) {
        next(error);
    }
})

module.exports = router;