/**
 * Created by Desire on 2017/4/16.
 */
let express=require('express');
let app=express();
let path = require('path');
let Movie=require('./modle').Movie;
app.use(express.static(path.resolve('public')));
app.set('view engine','html');
app.engine('html',require('ejs').__express);//针对HTML类型的模板应该如何渲染
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies});

    })


});
app.listen('9090');