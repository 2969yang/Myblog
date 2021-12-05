/**
 * 后台类目管理
 */
 const express = require('express')
 const category = require('../../middleware/category')
 const log = require('../../middleware/log')

 
 const categoryApp = express()
 
 categoryApp.get('/',category.getList, (req,res) => {
     let {user,categories} = req

     res.render('admin/category/index', {user: user,categories:categories})
 })

 categoryApp.post('/add', category.add, (req, res,next) => {
     if( req.insertId) {
        req.log = {
            time:new Date(),
            handle:'添加成功类目',
            ip:req.ip.split(':')[3]
        }
        log.add(req,res,next)
         res.json({ code: 1, msg: '添加成功'})
     }else{
         res.json({ code : 0, msg: '添加失败'})
     }
 })

 categoryApp.get('/del', category.del, (req, res,next) => {
    if( req.affectedRows > 0) {
        req.log = {
            time:new Date(),
            handle:'删除成功类目',
            ip:req.ip.split(':')[3]
        }
        log.add(req,res,next)
        res.json({ code : 1, msg: '删除成功'})
    }else{
        res.json({ code : 0, msg: '删除失败'})
    }
})
categoryApp.post('/setname', category.setName, (req, res,next) => {
    if( req.affectedRows > 0) {
        req.log = {
            time:new Date(),
            handle:'编辑类目',
            ip:req.ip.split(':')[3]
        }
        log.add(req,res,next)
        res.json({ code : 1, msg: '编辑类目名称成功'})
    }else{
        res.json({ code : 0, msg: '编辑类目名称失败'})
    }
})
categoryApp.post('/setindex', category.setIndex, (req, res) => {
    if( req.affectedRows > 0) {
        res.json({ code : 1, msg: '编辑类目索引成功'})
    }else{
        res.json({ code : 0, msg: '编辑类目索引失败'})
    }
})
 
 module.exports = categoryApp