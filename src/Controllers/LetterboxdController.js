const rssParser = require('rss-parser');
const rss = new rssParser();

module.exports = {
  async getDiary(req, res) {
    rss.parseURL(`https://letterboxd.com/${req.params.user}/rss`).then(response => {
      let data = [];
      response.items.forEach(item => {
        const poster = 
          item.content.slice(
            item.content.indexOf('<img src="') + 10, 
            item.content.indexOf('"/>'));
        data.push({
          title: item.title,
          review: item.contentSnippet,
          poster
        });
      });
      res.json({ data });
    }).catch(err => {
      res.status(500);
      res.json({ message: err });
    });

  }
}

