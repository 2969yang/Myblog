/**
 * 日志数据模型
 */
 module.exports = class Log extends require('./model') {
    /**
     * 获取日志列表
     */
    static getPage(start,size) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT handle, `time`,ip FROM `log` ORDER BY `time` DESC LIMIT ?,?'
            this.query(sql,[start,size]).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取日志数据模型失败：${err.message}`)
                reject(err)
            })
        })
    }
    /**
     * 获取日志的总条目数
     */
     static getCount() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT COUNT(1) as count FROM `log`'
            this.query(sql).then(results => {
                resolve(results[0].count)
            }).catch(err => {
                console.log(`获取日志的总条目数失败：${err.message}`)
                reject(err)
            })
        })
    }
     /**
     * 日志添加
     */
      static add(log) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO `log` SET ?'
            this.query(sql, log).then(results => {
                resolve(results.affectedRows)
            }).catch(err => {
                console.log(`日志添加失败：${err.message}`)
                reject(err)
            })
        })
    }
}