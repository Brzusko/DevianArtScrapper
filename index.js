require('dotenv').config();
const axios = require('axios');
const app = require('express')();
let credentials;

const envData = {
    PORT: process.env.HTTP_PORT || 7171,
    URL: process.env.SCRAPPER_LINK || 'null',
    TIMER: process.env.SCRAPPER_TIMER || 5000,
};

const childModules = [
    './scrapper/index'
];

const CreateSpawnModules = () => {
    scrapperProcess = fork(childModules[0], {
        env: envData,
    });
}
const GetCredentials = async () =>
{
    const params = {
        grant_type: 'client_credentials',
        client_id: parseInt(process.env.CLIENT_ID),
        client_secret: process.env.SECRET,
    };

    const response = await axios.get(process.env.OAUTH, { params })

    //console.log(response);
    console.log(process.env.CLIENT_ID)
}

app.listen(envData.PORT, async () => {
    console.log('HTTP Server is Running');
    await GetCredentials()
})



