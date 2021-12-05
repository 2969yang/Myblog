/**
 * 用户数据模型
 */
 module.exports = class User extends require('./model') {
    /**
     * 用户登录
     * @param {string} username 登录账号
     * @param {string} password 登录密码
     */
    static login(username, password) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,username,password FROM `user` WHERE username = ? AND password = ? '
            this.query(sql, [username, password]).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log('登录失败：' + err.message)
                reject(err)
            })
        })
    }
    // static artive(username, password) {
    //     return new Promise((resolve, reject) => {
    //         let sql = 'SELECT id,username FROM `user` WHERE username = ? AND password = ?'
    //         this.query(sql, [username, password]).then(results => {
    //             resolve(results[0].password)
    //         }).catch(err => {
    //             console.log('登录失败：' + err.message)
    //             reject(err)
    //         })
    //     })
    // }


    /**
     * 最后一次登录的时间
     */
    static lastLoginTime() {
        return new Promise((resolve, reject) => {
            let sql = "SELECT `time` FROM `log` WHERE handle = '登录' ORDER BY `time` DESC LIMIT 1"
            this.query(sql).then(results => {
                resolve(results[0].time)
            }).catch(err => {
                console.log('登录失败：' + err.message)
                reject(err)
            })
        })
    }

     /**
      * 编辑用户信息
      */
      static account(account) {
        return new Promise((resolve, reject) => {
            let sql = 'UPDATE user SET username = ?, password = ? WHERE id = ?'
            this.query(sql, [account.username,account.password,account.id]).then(results => {
                resolve(results.affectedRows)
                alert("修改成功")
            }).catch(err => {
                console.log(`编辑用户信息失败：` + err.message)
                reject(err)
            })
        })
    }
}