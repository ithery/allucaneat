

const puppeteer = require('puppeteer');
let browser;
(async () => {
    browser = await puppeteer.launch();
})();




module.exports = {
    browser
}