let fs = require('fs')


class UserConfig {
    static setLogin(uid) {
        // const data = new Uint8Array(Buffer.from(uid));
        fs.writeFile('conf.txt', uid, 'utf8', (err) => {
            if (err) throw err;
        });
    }

    static checkLogin(calback) {
        fs.readFile('conf.txt','utf8', (err, data) => {
            if (err) throw err;
            calback(data)
        });
    }
    static logout(calback) {
        fs.writeFile('conf.txt','','utf8', (err, data) => {
            if (err) throw err;
            calback(data)
        });
    }
}

module.exports = UserConfig