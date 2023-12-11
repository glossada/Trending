const fs = require('fs');

const saveNewsToCSV = async (newsArray) => {
  try {
    const csvContent = newsArray.map(news => `${news.title};${news.img};${news.paragraph.filter(para => para.trim() !== '').join(' ')}`).join('\n');
    
    const fileStream = fs.createWriteStream('news.csv', { encoding: 'utf-8' });

    fileStream.write('Title;Image;Paragraph\n' + csvContent);
    fileStream.end();

    console.log('CSV file has been created successfully.');
  } catch (error) {
    console.error('Error writing CSV:', error);
  }
};

module.exports = saveNewsToCSV;


