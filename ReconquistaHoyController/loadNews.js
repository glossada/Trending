const scrapePage = require('./Scraping');
const scrapeParagraphs = require('./parrafos');
const RECONQUISTAHOY = require('../URL')

const loadNews = async()=>{

    const fullNews = [];
    const newsTitles = await scrapePage(RECONQUISTAHOY)

    for (let i = 0; i < newsTitles.length; i++) {
        const paragraph = await scrapeParagraphs(newsTitles[i].link)
        const news ={
        title:newsTitles[i].title,
        link:newsTitles[i].link,
        img:newsTitles[i].img,
        paragraph,
        }
        fullNews.push(news);
    }

    return fullNews;
}

module.exports=loadNews;