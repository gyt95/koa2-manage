const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const router = require('koa-router');
const views = require('koa-views');
const koaStatic = require('koa-static');

const app = new Koa();

// console.log('__dirname: '+__dirname) // __dirname: D:\kwan\github\new-project\koa2-manage


// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname , './public')
))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 解析POST请求的请求体
app.use(bodyParser());

app.use(require('./routes/index.js').routes());
app.use(require('./routes/signin.js').routes());
app.use(require('./routes/signup.js').routes());
app.use(require('./routes/signout.js').routes());

// app.use(controller());

app.listen(5000);
console.log(`listening on port 5000`);