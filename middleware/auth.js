const Model = require("../model/model");

/**
 * 权限子应用
 */
module.exports = {
    /**
     * 从session中读取用户
     */
    getUser: (req, res, next) =>{
        req.user = req.session.user
        next()
    },
    /**
     * 是否允许用户进入后台管理
     */
    allowToAdmin: (req,res,next)=>{
        let user = req.session.user
        if(user){
            req.user = user
            next()
        }else{
            res.redirect('/login')
        }
    }
}