const puppeteer = require('puppeteer');

const scrapePage = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const contentWithImages = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('h2, h3, a img'));
      const data = [];
      let currentEntry = {};

      elements.forEach(element => {
        if (element.tagName === 'H2' || element.tagName === 'H3') {
          if (currentEntry.title && currentEntry.link) {
            data.push(currentEntry);
          }
          currentEntry = { title: element.innerText.trim() };
          const anchor = element.closest('a');
          if (anchor) {
            currentEntry.link = anchor.href;
          }
        } else if (element.tagName === 'IMG' && currentEntry.link) {
          currentEntry.img = element.src;
          data.push(currentEntry);
          currentEntry = {};
        }
      });

      return data;
    });

    await browser.close();

    return contentWithImages;
  } catch (error) {
    console.error('Error during scraping:', error);
    return null;
  }
};

module.exports = scrapePage;
