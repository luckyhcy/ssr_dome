"use strict";

var express = require("express");
var Vue = require("vue");
var vueServerRender = require("vue-server-renderer").createRenderer();

var app = express();

app.get('*', function (request, respones) {
    var vueApp = new Vue({
        data: {
            message: "Hello,Vue SSR!"
        },
        template: "<h1>{{message}}</h1>"
    });
    respones.status(200);
    respones.setHeader("Content-Type", "text/html;charset-utf-8;");
    vueServerRender.renderToString(vueApp).then(function (html) {
        respones.end(html);
    }).catch(function (error) {
        return console.log(error);
    });
});

app.listen(3000, function () {
    console.log("服务已启动");
});