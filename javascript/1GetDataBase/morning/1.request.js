/**
 * Created by Desire on 2017/4/16.
 */
//npm install request iconv-lite cheerio debug async cron ejs express mongoose --save

/*
* http://www.zhufengpeixun.cn/doc/html/node%E5%91%A8%E6%9C%AB%E5%A4%A7%E7%BA%B2/10.%E7%8F%A0%E5%B3%B0%E7%88%AC%E8%99%AB.html
* 课件地址
*
*
* */

//把NodeJs作为客户端去请求服务器
let request=require('request');//一个简单的HTTP请求工具,用来获取网页内容
let iconv=require('iconv-lite');// 可以帮我们把GBK编码的buffer转换成utf8的字符串
let cheerio=require('cheerio');
request({uri:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function (err,response,body) {//encoding:null如果不指定 就会按照原网站的编码格式进行显示，会容易出现乱码的错误
  /*  console.log(body);*/
    body=iconv.decode(body,'gbk');//把GBK格式的buffer转成utf8字符串
  /*  console.log(body);*/
  let MoveAry=[]
    let $=cheerio.load(body);
    $('.keyword  a.list-title').each(function(index,item){
        let $this=$(item);
        let aryList={
            url:$this.attr('href'),
            title:$this.text()
        }
        MoveAry.push(aryList);

    })
    console.log(MoveAry);
})

