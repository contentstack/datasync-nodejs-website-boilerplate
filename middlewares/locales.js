var path = require('path')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join('..', 'config', env))

module.exports = function (req, res, next) {
    var language = config.locales
    let code;
    
        code = "en-us"     
        req.code = code

        language.forEach(element => {
            if(req.originalUrl.indexOf(element.relative_url_prefix) > -1)
            { 
                code = element.code
                req.code = code
            }
        });     
    next()
}