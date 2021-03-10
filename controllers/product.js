const formidable = require('formidable')
const _ = require('lodash')
const Product = require('../models/category');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (res, req) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        let product = new Product(fields)

        if (fiels.photo) {
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        product.save((err) => {
            if (err) {
                res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result)
        })
    })
}