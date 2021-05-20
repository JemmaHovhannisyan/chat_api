'use strict'
const imagesModel = require('../moduls/imagesModul')

module.exports.getChat = async function (req, res){
    const data = await imagesModel.getData();
    res.json(data)
}
