/**
 * Created by Desire on 2017/4/16.
 */
let async=require('async');
async.series([
    function (next) {
setTimeout(function () {
    console.log('买菜')
    next(null,'买菜');
},3000)
    },
    function (next) {
        setTimeout(function () {
            console.log('做饭')
            next(null,'做饭');
        },3000)
    },
    function (next) {
        setTimeout(function () {
            console.log('吃饭')
            next(null,'吃饭');
        },3000)
    }
],function (err,result) {
   console.log(err)
    console.log(result)
})