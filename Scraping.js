const puppeteer = require('puppeteer');

const scrapePage = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const titlesWithLinks = await page.evaluate(() => {
      const titles = Array.from(document.querySelectorAll('h2, h3'));
      const titlesWithLinks = [];

      titles.forEach(title => {
        const titleText = title.innerText.trim();
        const anchor = title.closest('a');
        if (anchor) {
          const link = anchor.href;
          titlesWithLinks.push({ title: titleText, link });
        }
      });

      return titlesWithLinks;
    });

    await browser.close();

    return titlesWithLinks;
  } catch (error) {
    console.error('Error durante el scraping:', error);
    return null;
  }
};

module.exports = scrapePage;