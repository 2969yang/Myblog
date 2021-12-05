/**
 * 后台账号管理
 */
 const express = require('express')
 const user = require('../../middleware/user')
 const article = require('../../middleware//user')


 
 const accountApp = express()
 
 accountApp.get('/', (req,res) => {
     let {user  } = req
     res.render('admin/account/index', {user:user})
    //  console.log(user);
 })

// // 文章编辑
// accountApp.get('/', [user.editaccount], (req, res) => {
//     let { username, password,thumbnail } = req
//     res.render('admin/account/index', { username:username, password:password,thumbnail:thumbnail, code: '' })
// })
// accountApp.post('/add', user.editaccount, (req, res) => {
//     if (req.editaccount > 0) {
//         res.render('admin/accont/index', {  code: 1 })
//     } else {
//         res.render('admin/accont/index', {  code: 2 })
//     }
// })
 accountApp.post('/', article.account, (req, res,next) => {
    // console.log(req.body);
    if (req.affectedRows > 0) {
        res.render('admin/alert', { code: true, title: '成功提示', message: '文章编辑成功', url: '/admin/account/' })
        alert("修改成功")
    } else {
        res.render('admin/alert', { code: true, title: '失败提示', message: '文章编辑失败', url: '/admin/account/' })
    }
})
 
 module.exports = accountApp