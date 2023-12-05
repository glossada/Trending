const puppeteer = require('puppeteer');

const scrapeContent = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const content = await page.evaluate(() => {
      const mainTextDiv = document.querySelector('.main-text');
      const data = [];

      if (mainTextDiv) {
        const elements = Array.from(mainTextDiv.querySelectorAll('p, h2, h3'));

        elements.forEach(element => {
          data.push(element.innerText.trim());
        });
      }

      return data;
    });

    await browser.close();

    return content;
  } catch (error) {
    console.error('Error during scraping:', error);
    return null;
  }
};

module.exports = scrapeContent;