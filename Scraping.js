const puppeteer = require('puppeteer');

const scrapePage = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Extraer texto
    const textContent = await page.evaluate(() => {
      return document.body.innerText;
    });

    // Extraer imágenes
    const imageUrls = await page.evaluate(() => {
      const images = Array.from(document.getElementsByTagName('img'));
      return images.map(img => img.src);
    });

    // Extraer enlaces
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.getElementsByTagName('a'));
      return anchors.map(a => a.href);
    });

    await browser.close();

    return {
      textContent,
      imageUrls,
      links
    };
  } catch (error) {
    console.error('Error during scraping:', error);
    return null;
  }
};



module.exports = scrapePage;