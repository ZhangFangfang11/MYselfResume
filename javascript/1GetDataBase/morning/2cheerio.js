/**
 * Created by Desire on 2017/4/16.
 */
/*
* cheerio 这是一个node模块
* 可以用来提供HTML中的内容
*
*
* */
//类似于jquery
let cheerio=require('cheerio');
let html=(`


<ul class="list-group">
<li  id='1' class="list-group-item">朗读者</li>
</ul>
<ul class="list-group">
<li  id='2' class="list-group-item">速度与激情8</li>
</ul>


`);
let $=cheerio.load(html);
$('.list-group .list-group-item').each(function (index,item) {
    let $this=$(item);
    let move={
        id:$this.attr('id'),
       title:$this.text()
    }
    console.log(move);
})