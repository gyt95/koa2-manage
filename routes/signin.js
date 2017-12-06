const router = require('koa-router')();

// const userModel = require('../lib/mysql.js');

// get '/signin'登录页面
router.get('/signin', async (ctx, next) =>{
	await ctx.render('signin',{
		session: ctx.session,
	})
	console.log(3)
})

router.post('/signin', async (ctx, next) =>{
	console.log(ctx.request.body);
	let name = ctx.request.body.name,
		pswd = ctx.request.body.password
	
	// await userModel.findDataByName(name)
	// .then(result => {
	// 	console.log(result);
	// 	const res = JSON.parse(JSON.stringify(result))
	// 	if(name === res[0]['name'] && pswd === res[0]['pswd']){
	// 		// ctx.body = 'true'
	// 		ctx.session.user = res[0]['name']
	// 		ctx.session.id = res[0]['id']
	// 		console.log('ctx.session.id',ctx.session.id)
	// 		// ctx.redirect('/posts')
	// 		console.log('session',ctx.session)
	// 		console.log('登录成功')


	// 		// const token = check.signToken(user)
	// 		// ctx.body = {
	// 		// 	message: '登录成功!',
	// 		// 	token: token
	// 		// }
	// 	}
	// }).catch(err => {
	// 	ctx.body='false'
	// 	console.log('用户名或密码错误!')
	// 	// ctx.redirect('/signin')
	// })
})

module.exports = router;