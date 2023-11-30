const scrapePage = require('./Scraping');

// Ejemplo de uso:
const urlToScrape = 'https://www.reconquistahoy.com/ultimas/';
scrapePage(urlToScrape)
  .then(data => {
    if (data) {
      console.log('Texto:', data.textContent);
      console.log('Imágenes:', data.imageUrls);
      console.log('Enlaces:', data.links);
    } else {
      console.log('No se pudo obtener los datos.');
    }
  })
  .catch(err => console.error('Error:', err));