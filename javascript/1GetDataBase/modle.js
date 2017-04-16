/**
 * Created by Desire on 2017/4/16.
 */
let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crawl');
let MovieSchema=new  mongoose.Schema({
    name:String,
    url:String
});
module.exports.Movie=mongoose.model('Movie',MovieSchema);

