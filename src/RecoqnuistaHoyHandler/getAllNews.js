const loadNews = require('../ReconquistaHoyController/loadNews');
const saveNewsToCSV = require('../ReconquistaHoyController/newsToCsv')

const getAllNews = async(req, res)=>{
    try {
        const newsLoaded=await loadNews();
        if(newsLoaded.length===0){
            res.status(400).json('News not found');
        }else{
            saveNewsToCSV(newsLoaded)
            res.status(200).json(newsLoaded);
        }
    } catch (error) {
        res.status(500).json('Error: ' + error.message);
    }
}

module.exports=getAllNews;