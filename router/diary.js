/**
 * 日志子应用
 */

 const express = require('express')
 const article = require('../middleware/article')
 const category = require('../middleware/category')
 const auth = require('../middleware/auth')

 // 首页子应用
const diaryApp = express()

// 加载首页页面
diaryApp.get('/', [article.getListBykeywrod, category.getList,auth.getUser], (req, res) => {
    let { articles, categories, user} = req
    res.render('diary', { articles: articles, categories: categories, keyword: req.query.keyword,user: user })
})

module.exports = diaryApp