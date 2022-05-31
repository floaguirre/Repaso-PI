const {Episode} = require('../db');
const { Router} = require('express');
const axios = require('axios');


const router = Router();

// GET /episodes:
// Debe devolver un listado con todos los episodios
// En una primera instancia deberán obtenerlos desde la API externa y
//  guardarlos en su propia base de datos. Luego ya podrán utilizarlos desde allí

router.get('/' , async (req, res, next) => {
    try {
        const episodesApi = await axios.get('https://rickandmortyapi.com/api/episode')
        const allEpisodes = episodesApi.data.results.map(episode => episode.name);

        allEpisodes.forEach(element => {
            Episode.findOrCreate({
                where: {name: element}
            })
        });

        const episodios = await Episode.findAll();
        res.send(episodios)
        
    } catch (error) {
        next(error)
        
    }

})

module.exports = router;