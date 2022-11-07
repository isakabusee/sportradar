import puppeteer from 'puppeteer';

async function scrapeChannel(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page,goto(url);

}

scrapeChannel('')