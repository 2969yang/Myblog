/**
 * 日志中间件
 */
 const Log = require('../model/log')
 module.exports = {
     /**
      * 获取列表
      */
     getPage: (req, res, next) => {
         let { p, size } = req.page
         Log.getPage((p - 1) * size, size).then(results => {
             req.page.list = results
             next()
         }).catch(err => {
             next(err)
         })
     },
     /**
      * 获取总条目数
      */
     getCount: (req, res, next) => {
         Log.getCount().then(results => {
             req.count = results
             next()
         }).catch(err => {
             next(err)
         })
     },
     /**
      * 添加日志
      */
     add: (req, res, next) => {
         Log.add(req.log).then(results => {
             req.count = results
             next()
         }).catch(err => {
             next(err)
         })
     }
 }