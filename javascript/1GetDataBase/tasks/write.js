/**
 * Created by Desire on 2017/4/16.
 */

//在这个模块里面我们会把电影数组保存到mongodb里面
let Movie=require('../modle').Movie;
let async=require('async');
let debug=require('debug')('1GetDataBase:write')
module.exports=function (movies,cb) {
async.forEach(movies,function(movie,cb){
    Movie.create(movie,cb);
    debug(`写到的电影:${movie.name}`)
},cb)
// Movie.create(movies,cb);//上面代码的简写

}