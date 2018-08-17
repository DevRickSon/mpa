const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(serve(path.resolve(__dirname, '../build/')));
app.use(ctx => {
    ctx.body = 'react world!!';
});

// router.get('/', ctx => {
//     console.log(ctx.pathname);
//     const indexHtml = path.readFileSync(path.resolve(__dirname, '../build/index.html'), {encoding: 'utf8'});
//
//     ctx.body = 'alksdjf';
// });
//
// router.get('/showroom', ctx => {
//     console.log(ctx.pathname);
//     const indexHtml = path.readFileSync(path.resolve(__dirname, '../build/showroom/index.html'), {encoding: 'utf8'});
//
//     ctx.body = indexHtml;
// });
//
// app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server is running on 4000');
});