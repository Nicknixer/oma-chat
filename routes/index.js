module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.render('index', {title: req.session.name});
    });

    app.post('/auth', function (req, res, next) {
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
};
