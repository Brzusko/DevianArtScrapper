require('dotenv').config();
const { fork } = require('child_process');
const app = require('express')();
let scrapperProcess;

const childModules = [
    './scrapper/index'
];

const envData = {
    PORT: process.env.HTTP_PORT || 7171,
    LINK: process.env.SCRAPPER_LINK || 'null',
    TIMER: process.env.SCRAPPER_TIMER || 5000,
};

const CreateSpawnModules = () =>
{
    scrapperProcess = fork(childModules[0], {
        env: envData,
    });
}

app.listen(envData.PORT, async () => {
    console.log('HTTP Server is Running');
    CreateSpawnModules();
})




