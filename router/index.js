/**
 * 首页子应用（首页路由）
 */

 const express = require('express')
 const article = require('../middleware/article')
 const category = require('../middleware/category')
 const auth = require('../middleware/auth')
 
 // 首页子应用
 const indexApp = express()
 
 indexApp.use(auth.getUser)
 
 // 加载首页页面
//  indexApp.get('/', (req, res) => {
//      res.render('index',)
//  })
 indexApp.get('/', [article.getHot, article.getList, category.getList], (req, res) => {
    let { hots, articles, categories, user } = req
    res.render('index', { hots: hots, articles: articles, categories: categories, user: user })
})
 
 module.exports = indexApp