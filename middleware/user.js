/**
 * 用户中间件
 */

const User = require('../model/user')

 module.exports = {
     /**
      * 最后一次登录时间
      */
     lastLoginTime: (req, res, next) => {
         User.lastLoginTime().then(results=>{
             req.lastLoginTime = results
             next()
         }).catch(err=>{
             next(err)
         })
     },
    //  check: (req, res, next) => {
    //     let { password } = req.body
    //     let passwords = { password : password }
    //     User.check(passwords).then(results=>{
    //         req.artive = results
    //         next()
    //     }).catch(err=>{
    //         next(err)
    //     })
    // },
     /**
     * 编辑用户信息
     */
    account: (req, res, next) => {
        let { username, password ,id} = req.body
        console.log(req.body);
        let user = {
            username: username,
            password: password,
            id:id
        }
        User.account(user).then(results => {
            req.affectedRows = results
            console.log(req.affectedRows);
            next()
            
        }).catch(err => {
            next(err)
        })
    }
 }