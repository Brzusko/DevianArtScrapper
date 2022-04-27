const puppeter = require('puppeteer');
let webClient;
let processInterval;
const links = [];

const main = async () => {
    console.log('Hesz');
    console.log(process.env.TIMER);
};

(async () => {
    webClient = await puppeter.launch();
    processInterval = setInterval(main, process.env.TIMER);
})();