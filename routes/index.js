let express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: req.session.name});
});

router.post('/auth', function (req, res, next) {
    let name = req.body.name;
    if (name.length !== 0) {
        req.session.name = name;
        res.json({
            messages: "Успешно прикрепили имя",
            success: true
        });
    }
    res.json({
        msg: "Не заполнено имя",
        success: false
    });
});

module.exports = router;
