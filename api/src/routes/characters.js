const {Character, Episode} = require('../db');
const { Router} = require('express');
const axios = require('axios');

const router = Router();

// ] GET /characters:
// Obtener el listado de personajes
// Debe devolver solo los datos necesarios para la ruta principal

router.get('/' , (req, res, next) => {
    try {
        const charactersApi = axios.get(`https://rickandmortyapi.com/api/character`);
        const charactersDb = Character.findAll({
            
            include: {model: Episode}
        });

        Promise.all([charactersApi, charactersDb]).then((respuesta) => {
            const [charactersApi, charactersDb] = respuesta;
            console.log(charactersApi)

            const filterCharacterApi = charactersApi.data.results.map((c) => {
                return {
                    id: c.id,
                    name: c.name,
                    image: c.image,
                    species: c.species,
                    origen: c.origin.name,
                    episodes: c.episode
                }
            });
            const allCharacters = [...filterCharacterApi, ...charactersDb];
            res.status(200).send(allCharacters.length? allCharacters : 'No Character Found')
        });
        
    } catch (error) {
        next(error)
        
    }

})

module.exports = router;