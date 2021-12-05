/**
 * 访问量数据模型
 */
 module.exports = class PV extends require('./model') {
    /**
     * 访问总访问量
     */
    static getTotal() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT SUM(hits) AS total FROM pv'
            this.query(sql).then(results => {
                resolve(results[0].total)
            }).catch(err => {
                console.log(`访问总访问量失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取全部访问量
     */
     static getAll() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT `time`,hits FROM pv ORDER BY `time` ASC'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取全部访问量失败：${err.message}`)
                reject(err)
            })
        })
    }
}