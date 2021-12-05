const Category = require('../model/category')
/**
 * 文章类目中间件
 */
 module.exports = {
    /**
     * 获取文章类目列表
     */
    getList: (req, res, next) => {
        Category.getList().then(results => {
            req.categories = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取获取指定文章类目详情
     */
     getCategoryById: (req, res, next) => {
        let id = req.params.id
        Category.getCategoryById(id).then(results => {
            req.category = results
            next()
        }).catch(err => {
            next(err)
        })
    },
     /**
     * 获取总类目数
     */
      getCount: (req, res, next) => {
        let id = req.params.id
        Category.getCount().then(results => {
            req.categoryCount = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 添加类目
     */
    add: (req, res, next) => {
        let { name, index } = req.body
        Category.add(name, index).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 删除类目
     */
    del: (req, res, next) => {
        let { id } = req.query
        Category.del(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 编辑类目名称
     */
    setName: (req, res, next) => {
        let { id ,name} = req.body
        Category.setName(id ,name).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 编辑类目索引
     */
    setIndex: (req, res, next) => {
        let { id ,index} = req.body
        Category.setIndex(id ,index).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
 }