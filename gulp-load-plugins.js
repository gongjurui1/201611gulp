module.exports = function () {
    var $ = {};
    var package = require('./package.json');
    var devDependencies = package.devDependencies;
    // ["gulp","gulp-clean-css-js","gulp-concat"]
    Object.keys(devDependencies).reduce(function (currVal, item) {
        if (item.startsWith('gulp-'))
            $[item.slice(5).replace(/-(\w)/g, function () {
                return arguments[1].toUpperCase();
            })] = require(item);
    }, $)
    return $;
}
/*
var $ = module.exports();
console.log($);*/
