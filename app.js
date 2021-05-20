const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const routes = require('./routes')
require('dotenv').config()
routes(app)

app.listen(process.env.DB_PORT, () => {
    console.log('OK')
})