const db = require('../db/connection');

const queryDatabase = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) {
                reject({ error: err.message });
            }
            resolve(result);
        });
    });
};

module.exports = queryDatabase;