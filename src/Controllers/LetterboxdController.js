const rssParser = require('rss-parser');
const rss = new rssParser();

module.exports = {
  async getDiary(req, res) {
    rss.parseURL(`https://letterboxd.com/${req.params.user}/rss`).then(response => {
      let movies = [];
      response.items.forEach(item => {
        const poster = item.content.slice(
          item.content.indexOf('<img src="') + 10, 
          item.content.indexOf('"/>'));
        movies.push({
          title: item.title,
          review: item.contentSnippet,
          poster
        });
      });
      res.json({ movies });
    }).catch(err => {
      err.message.includes('404')
        ? res.status(404)
        : res.status(500);
      res.json({ message: err.message });
    });

  }
}

