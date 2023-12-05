// Ejemplo de uso:
const scrapePage = require('./Scraping');
const scrapeParagraphs = require('./parrafos');

//titulos y links
// const urlToScrape = 'https://www.reconquistahoy.com/ultimas/';
// scrapePage(urlToScrape)
//   .then(data => {
//     if (data) {
//       console.log('--- Títulos con Enlaces ---');
//       console.log(data[0]);
//     } else {
//       console.log('No se pudo obtener los datos.');
//     }
//   })
//   .catch(err => console.error('Error:', err));

//parrafos
const urlToScrape = 'https://www.reconquistahoy.com/65503-quedo-con…nistracion-de-la-union-agricola-de-avellaneda';
scrapeParagraphs(urlToScrape)
  .then(paragraphs => {
    if (paragraphs) {
      console.log('--- Párrafos ---');
      for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);
      }
    } else {
      console.log('No se pudieron obtener los párrafos.');
    }
  })
  .catch(err => console.error('Error:', err));