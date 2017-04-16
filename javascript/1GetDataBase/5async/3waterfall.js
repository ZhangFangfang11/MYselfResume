/**
 * Created by Desire on 2017/4/16.
 */
let async=require('async');
let fs=require('fs');
/*
async.waterfall([
    function (cb) {
       fs.readFile('a.txt','utf8',function(err,data){
           cb(err,data);//读取里面的内容 b.txt
       })
    },
    function (data,cb) {
        fs.readFile(data,'utf8',function(err,data){
            cb(err,data);//读取里面的内容 c.txt
        })
    },
    function (data,cb) {
        fs.readFile(data,'utf8',function(err,data){
            cb(err,data);//读取里面的内容 3
        })
    }
],function(err,data){
    console.log(data);
});
*/



/*

async.waterfall([
    readA,readB,readB
],function(err,result){
    console.log(result)
})


let readA = function (cb) {
    fs.readFile('a.txt','utf8',cb)
};
let readB= function (data,cb) {
    fs.readFile(data,'utf8',cb)
}*/
