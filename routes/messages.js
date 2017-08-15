let express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    req.app.locals.db.query('SELECT name, message, date FROM messages', (error, rows, fields) => {
        if (error) {
            res.json({
                success: false,
                msg: error
            });
        }

        res.json({
            success: true,
            messages: rows
        });
    });
});

/*
router.post('/', function (req, res, next) {
    let name = req.body.name;
    let message = req.body.message;
    if (name.length !== 0 && message.length !== 0) {
        req.app.locals.messages.push({
            name: req.session.name,
            message: message,
            datetime: new Date()
        });
        res.json({
            messages: "Сообщение добавлено",
            success: true
        });
    }
    res.json({
        msg: "Не заполнено имя или сообщение",
        success: false
    });
});
*/

module.exports = router;
