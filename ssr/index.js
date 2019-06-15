const express = require("express");
const App = require("./src/entry-server.js");
let path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
  template:require("fs").readFileSync(path.join(__dirname,"./index.html"),"utf-8")
});

const app = express();

app.get('*',async (request,respones) => {
    respones.status(200);
    respones.setHeader("Content-Type","text/html;charset-utf-8;");

    let {url} = request;
    //  这里可以传递给vue实例一些参数
    let vm = await App({url});
    vueServerRender.renderToString(vm).then((html) => {
        respones.end(html);
    }).catch(error => console.log(error));
})

app.listen(3000,() => {
    console.log("服务已启动")
});