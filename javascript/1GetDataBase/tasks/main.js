
/**
 * Created by Desire on 2017/4/16.
 */
//主入口模块
let read=require('./read');
let write=require('./write');
let async=require('async');
let url='http://top.baidu.com/buzz?b=26';
let Movie=require('../modle').Movie;
let debug=require('debug')('1GetDataBase:main');//
async.waterfall([
    function (cb) {
    Movie.remove({},cb);

    },
    function (data,cb) {

       read(url,cb);
    },
    function (data,cb) {
        write(data,cb);
    }
    ],function (err,result) {
     debug('全部执行完毕')
    }
)