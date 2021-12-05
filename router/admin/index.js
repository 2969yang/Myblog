/**
 * 后台首页
 */
const express = require('express')
const user = require('../../middleware/user')
const pv = require('../../middleware/pv')
const category = require('../../middleware/category')
const article = require('../../middleware/article')

const indexApp = express()

/**
 * 加载首页
 */
 indexApp.get('/', [user.lastLoginTime, pv.getTotal, category.getCount, article.getCount], (req, res) => {
    let { user, lastLoginTime, pvTotal, articleCount, categoryCount } = req
    res.render('admin/index', { user: user, lastLoginTime: lastLoginTime, pvTotal: pvTotal, articleCount: articleCount, categoryCount: categoryCount })
})

/**
 * 访问量接口
 */
 indexApp.get('/pvs',[pv.getAll],(req,res)=>{
    let {pvs} = req
    let data = {}
    data.data = pvs
    data.start = pvs[0].time
    data.end = pvs[pvs.length-1].time
    res.json(data)
})
module.exports = indexApp