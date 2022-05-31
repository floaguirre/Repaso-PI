const { Router } = require("express");
const charactersRoute = require('./characters');
const episodesRoute = require('./episode');
const characterRoute = require('./character');


const router = Router();

// Configurar los routers

router.use('/characters', charactersRoute);
router.use('/episodes', episodesRoute);
router.use('/character', characterRoute);


module.exports = router;
