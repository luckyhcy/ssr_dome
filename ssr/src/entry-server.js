const createApp = require("./app.js");

module.exports = (context) => {
    return new Promise((reslove,reject) => {
        let {url} = context;
        let {app,router} = createApp(context);
        router.push(url);
        //  router回调函数
        //  当所有异步请求完成之后就会触发
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if(!matchedComponents.length){
                return reject({
                    code:404,
                });
            }
            reslove(app);
        },reject)
    })
}