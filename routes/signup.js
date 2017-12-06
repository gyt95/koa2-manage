const router = require('koa-router')();

// const userModel = require('../lib/mysql.js');

// GET '/signup' 注册页(作用?)
// 向模板传递session参数，存取用户名、登录id等
router.get('/signup',async (ctx, next) => {
    await ctx.render('signup',{	
        session: ctx.session,	
    })
})

// router.post('/signup', async (ctx, next) => {
//     console.log(ctx.request.body);
//     const user = {
//         name: ctx.request.body.name,
//         pswd: ctx.request.body.password,
//         repeatpass: ctx.request.body.repeatpass
//     }
//     await userModel.findDataByName(user.name)
//     .then(result => {
//         console.log(result);

//         if(result.length){
//             try{
//                 throw Error('用户存在');
//             }catch(error){
//                 console.log(error);
//             }
//             ctx.body = {
//                 data: 1
//             }
//         }else if (user.pswd!==user.repeatpass || user.pswd==''){
//             ctx.body = {
//                 data:2
//             };				
//         }else{
//             ctx.body = {
//                 data: 3
//             }
//             console.log('注册成功');
//             userModel.insertData([ctx.request.body.name,ctx.request.body.password,2]);
//         }

//     })
// })

module.exports = router;