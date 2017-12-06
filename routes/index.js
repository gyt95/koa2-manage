const router = require('koa-router')();

// 处理数据库（之前已经写好，在mysql.js）
// const userModel = require('../lib/mysql.js');

// 时间中间件
const moment = require('moment');

// get '/'页面
router.get('/', async (ctx,next)=>{
	ctx.redirect('/index');
})

// get '/index'页面
router.get('/index', async (ctx,next)=>{
	await ctx.render('index', {
		session: ctx.session
	})
})

module.exports = router;