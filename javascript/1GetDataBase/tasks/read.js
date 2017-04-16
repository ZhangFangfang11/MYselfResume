/**
 * Created by Desire on 2017/4/16.
 */
/*
* 在这个模块里会读取url里的数据
* 并
*
* */
let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio');
let debug=require('debug')('1GetDataBase:read');//('debug')('项目名：模块名')

module.exports =function (url,callback) {
request({url,encoding:null},function (err,response,body) {
    body=iconv.decode(body,'gbk');
 let $=cheerio.load(body);
    let movies=[];
    $('.keyword  a.list-title').each(function(index,item){
        var $this=$(this);
        let move={
            url:$this.attr('href'),
            name:$this.text()
        };
        debug(`读到电影:${move.name}`);

        movies.push(move)
    });
    callback(err,movies);
})

};
/*
let url='http://top.baidu.com/buzz?b=26';
module.exports(url,function (err,movies) {
    console.log(movies)
})*/
