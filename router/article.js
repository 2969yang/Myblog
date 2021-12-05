/**
 * 文章子应用
 */
 const express = require('express')
 const article = require('../middleware/article')
 const category = require('../middleware/category')
 const auth = require('../middleware/auth')
 
 // 文章子应用
 const articleApp = express()
 
 articleApp.use(category.getList, auth.getUser)
 
 // 文章列表页
 articleApp.get('/list/:id', [article.getListByCategoryId, category.getCategoryById], (req, res) => {
     let { articles, categories, category, user } = req
     res.render('list', { articles: articles, categories: categories, category: category, user: user })
 })
 
 // 文章详情页
 articleApp.get('/:id', [article.getArticleById, article.getTabs, article.getPrev, article.getNext], (req, res) => {
     let { article, categories, tabs, prev, next, user } = req
     res.render('article', { article: article, categories: categories, tabs: tabs, prev: prev, next: next, user: user })
 })
 
 
 module.exports = articleApp