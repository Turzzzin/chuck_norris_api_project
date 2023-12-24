const express = require('express');
const router = express.Router();
const { GetJoke } = require('../controller/cn_controller')

router.get('/', (req, res) => {
    res.status(200).send('Sucesso na inicialização da aplicação!')
})

router.get('/chuck_norris/piadas', async (req, res) => {
    let jokesResponse = await GetJoke();
    console.log(jokesResponse);
    res.status(200).send(jokesResponse);
});

module.exports = router;