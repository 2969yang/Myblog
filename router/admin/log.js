/**
 * 后台日志管理
 */
 const express = require('express')
 const log = require('../../middleware/log')
 
 const logApp = express()
 
 logApp.get('/', log.getCount, (req, res, next) => {
     let page = {
         p: req.query.p ? req.query.p : 1,
         count: req.count,
         size: 5
     }
     page.total = Math.ceil(page.count / page.size)
     page.p = page.p > page.total ? page.total : page.p
     page.p = page.p < 1 ? 1 : page.p
 
     req.page = page
     next()
 }, log.getPage, (req, res) => {
     res.render('admin/log/index', { user: req.user, page: req.page })
 })
 
 module.exports = logApp