const axios = require('axios');
const { AppStrings } = require('../utils/constants/app_strings')

async function GetJoke() {
    const response = await axios.get(AppStrings.cn_api_url);
    const jokesResponse = response.data;
    
    let formatedResponse = {
        data_atualizacao: jokesResponse.updated_at,
        data_criacao: jokesResponse.created_at,
        icone: jokesResponse.icon_url,
        id: 'teste',
        piada: jokesResponse.value,
        referencia: jokesResponse.url
    };
    return formatedResponse
}

module.exports = { GetJoke }