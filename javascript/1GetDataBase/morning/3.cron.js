/**
 * Created by Desire on 2017/4/16.
 */
/*
* 希望程序有计划有规律的执行*
* */

// cron   用来周期性的执行某种任务或等待处理某些事件的一个守护进程
let CronJob=require('cron').CronJob;
/*
*
*
*
*      * 代表所有可能的值
* */
let job=new CronJob('0 0 22 * * 1,5',function () {

})