const db = require('../util/database');

exports.getAll = (req, res, next) => {
    db.execute('SELECT * FROM client')
        .then(result => {
            res.status(200).json({
                massage: 'hello!',
                clients: result[0]
            })
        })
        .catch()
}