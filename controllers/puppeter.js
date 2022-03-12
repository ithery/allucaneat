
// const {browser} = require('../services/puppeteer');
require('dotenv').config();
const { HttpCode } = require('../helpers/constants');
const puppeteer = require('puppeteer');
// const AVATARS_OF_USERS = process.env.AVATARS_OF_USERS; // Local

// Signup
const capture = async (req, res, next) => {
    try {
        let errCode=0;
        let errMessage='';
        let data = {};
        let {url, width, height, fullPage} = req.query;
        if(!url) {
            errCode++;
            errMessage='url required';
        }

        if(errCode===0) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36');
            if (width || height) {
                const newWidth = !width?600:width;
                const newHeight = !height?'0':height;
                if (height && fullPage) fullPage = false;
                await page.setViewport({width: Number(newWidth), height: Number(newHeight)});
            }
            await page.goto(url);
            const title = (await page.title()).replace(/[/\\?%*:|"<>]/g, '-');
            const base64 = await page.screenshot({ encoding: "base64", fullPage: fullPage });
            const resolvedUrl = page.url;
            data = {
                resolvedUrl,
                title,
                base64
            };
        }
        return res.status(HttpCode.OK).json({
            errCode,
            errMessage,
            data
        });
    } catch (e) {
        next(e);
    }
};


module.exports = {
    capture,
};


/**
 * В контроллерах находится вся логика работы
 */
