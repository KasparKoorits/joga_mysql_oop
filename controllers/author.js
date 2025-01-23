const authorDbModel = require("../models/author");
const articleDbModel = require("../models/article");

const articleModel = new articleDbModel();
const authorModel = new authorDbModel();

class authorController {
  constructor() {
    const authors = [];
  }

  async getAuthorById(req, res) {
    const author = await authorModel.findById(req.params.id);
    const articles = await articleModel.findAll();
    const authorArticles = articles.filter(
      (article) => article.author_id === author.id
    );
    author["articles"] = authorArticles;
    res.status(201).json({ author: author });
  }
}

module.exports = authorController;
