const Vue = require("vue");
const createRouter = require("../router")

module.exports = (context) => {
    const router = createRouter();
    const app = new Vue({
        router,
        data:{
            message:"Hello,Vue SSR!"
        },
        template:`
            <div>
                <div>
                    <h1>{{message}}</h1>
                    <ul>
                        <li>
                            <router-link to="/">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于我</router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        ` 
    });
    return {
        app,
        router
    }
}