let Message = require('../models/Message');

module.exports = function(app) {
    app.get('/messages', function (req, res) {
        Message.find(function (error, messages) {
            if (error) {
                res.json({
                    success: false,
                    msg: error
                });
            }

            res.json({
                success: true,
                messages: messages
            });
        });
    });

    app.post('/messages', function (req, res) {
        let name = req.body.name;
        let message = req.body.message;

        if (!name || !message || name.length === 0 || message.length === 0) {
            res.json({
                msg: "Не заполнено имя или сообщение",
                success: false
            });
        }

        let userMessage = new Message({
            name: name,
            text: message,
            date: new Date().toISOString()
        });

        userMessage.save(function (error) {
            if (error) {
                res.json({
                    success: false,
                    msg: error
                });
            }

            res.json({
                messages: "Сообщение добавлено",
                success: true
            });
        });
    });
};
