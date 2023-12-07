const puppeteer = require('puppeteer');

const scrapeContent = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const contentWithLinksAndImages = await page.evaluate(() => {
      const mainTextDiv = document.querySelector('.main-text');
      const data = [];

      if (mainTextDiv) {
        const elements = Array.from(mainTextDiv.querySelectorAll('p, h2, h3, img, a'));

        elements.forEach(element => {
          if (
            !element.closest('.temas.floatFix') &&
            !element.closest('.social') &&
            !element.closest('.tag-feed') &&
            element.tagName !== 'SCRIPT'
          ) {
            if (element.tagName === 'IMG') {
              const imgSrc = element.src;
              data.push(`<img src="${imgSrc}">`);
            } else if (element.tagName === 'A') {
              const link = element.href;
              const text = element.innerText.trim();
              data.push(`<a href="${link}">${text}</a>`);
            } else {
              data.push(element.innerText.trim());
            }
          }
        });
      }

      return data;
    });

    await browser.close();

    return contentWithLinksAndImages;
  } catch (error) {
    console.error('Error during scraping:', error);
    return null;
  }
};

module.exports = scrapeContent;