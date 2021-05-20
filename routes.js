'use strict'
const {validationResult } = require('express-validator');
const images = require('./controllers/imagesController')

module.exports = function(app) {
    app.get('/chat', [], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        res.setHeader('Content-Type', 'application/json');
        images.getChat(req, res)
    })
}


