/**
 * 访问量中间件
 */
 const { getAll } = require('../model/pv')
const Pv = require('../model/pv')
 module.exports = {
     /**
      * 获取总访问量
      */
     getTotal:(req,res,next)=>{
         Pv.getTotal().then(results=>{
             req.pvTotal = results
             next()
         }).catch(err=>{
             next(err)
         })
     },
     /**
      * 获取全部记录
      */
      getAll:(req,res,next)=>{
        Pv.getAll().then(results=>{
            req.pvs = results
            next()
        }).catch(err=>{
            next(err)
        })
    }
}