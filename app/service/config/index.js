const axios = require('axios')

export default class AxiosConfig {

    makeGetRequest = async (url) => {
        const config = { method: 'GET', url }
        return await axios(config)
    }
    makePostRequest = async (url, data) => {
        const config = { method: 'POST', url, data }
        return await axios(config)
    }
    makePutRequest = async (url, data) => {

    }
}