const Article = require('../model/article')
const Tab = require('../model/tab')

/**
 * 文章中间件
 */
module.exports = {
    /**
     * 获取热门文章
     */
    getHot: (req, res, next) => {
        Article.getHot(5).then(results => {
            req.hots = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取最新文章
     */
    getList: (req, res, next) => {
        Article.getList().then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定类目下的文章列表
     */
    getListByCategoryId: (req, res, next) => {
        let id = req.params.id
        Article.getListByCategoryId(id).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定关键词的文章列表
     */
    getListBykeywrod: (req, res, next) => {
        let keyword = req.query.keyword
        Article.getListBykeywrod(keyword).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定文章的详情
     */
    getArticleById: (req, res, next) => {
        let id = req.params.id
        Article.getArticleById(id).then(results => {
            req.article = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定文章的标签列表
     */
    getTabs: (req, res, next) => {
        let id = req.params.id
        Tab.getListByArticleId(id).then(results => {
            req.tabs = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 上一篇文章
     */
    getPrev: (req, res, next) => {
        let id = req.params.id
        Article.getPrevArticle(id).then(results => {
            req.prev = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 下一篇文章
     */
    getNext: (req, res, next) => {
        let id = req.params.id
        Article.getNextArticle(id).then(results => {
            req.next = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取总博文数
     */
    getCount: (req, res, next) => {
        Article.getCount(req.query.category_id, req.query.hot).then(results => {
            req.articleCount = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定页的文章列表
     */
    getPage: (req, res, next) => {
        Article.getPage(res.start, res.size, req.query.category_id, req.query.hot).then(results => {
            req.pageList = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 设置热门推荐
     */
    setHot: (req, res, next) => {
        let { id, hot } = req.query
        Article.setHot(id, hot).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 添加文章
     */
    add: (req, res, next) => {
        let { title, content, hot, category_id } = req.body
        let article = {
            title: title,
            content: content,
            hot: hot ? 1 : 0,
            category_id: category_id,
            thumbnail: req.uploadUrl ? req.uploadUrl : null
        }

        Article.add(article).then(results => {
            req.insertId = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 删除文章
     */
    del: (req, res, next) => {
        let { id } = req.query
        Article.del(id).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 编辑文章
     */
    edit: (req, res, next) => {
        let { title, content, hot, category_id, thumbnail, id } = req.body
        let article = {
            title: title,
            content: content,
            hot: hot ? 1 : 0,
            category_id: category_id,
            thumbnail: req.uploadUrl ? req.uploadUrl : thumbnail,
            id: id
        }
        console.log(req.body);
        Article.edit(article).then(results => {
            req.affectedRows = results
            next()
        }).catch(err => {
            next(err)
        })
    }
    
}