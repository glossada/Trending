// Ejemplo de uso:
const scrapePage = require('./ReconquistaHoyController/Scraping');
const scrapeParagraphs = require('./ReconquistaHoyController/parrafos');
const loadNews = require('./ReconquistaHoyController/loadNews')

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

// loadNews()
//   .then(news => {
//     if (news) {
//       console.log('--- News ---');
//       for (let i = 0; i < news.length; i++) {
//         console.log('1- '+news[i].title)
//       for (let i = 0; i < news[0].paragraph.length; i++) {
//         console.log(news[0].paragraph[i])
        
//       }
//       console.log('----------------------------');
//     }
//     } else {
//       console.log('No se pudieron obtener las news.');
//     }
//   })
//   .catch(err => console.error('Error:', err));