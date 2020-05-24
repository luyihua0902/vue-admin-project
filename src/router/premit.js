import router from "./index";
import store from "../store/index";
import { getToKen } from "@/utils/app";
import { removeToKen,removeUserName } from "../utils/app";
const whiteRouter = ['/login']; // indexOf方法，判断数组中是否存在指定的某个对象，如果不存在，则返回-1
// 路由守卫
router.beforeEach((to, from, next) => {
    if (getToKen () ) {
       if(to.path==='/login'){
           removeToKen();
           removeUserName();
           store.commit("app/SET_TOKEN", '');
           store.commit("app/SET_USERNAME", '');
           next()
       }
       else{
           next();
       }


        // console.log('存在')
        // next()
    }
    else {
       
        if(whiteRouter.indexOf(to.path) !== -1){
            next()
        }
        else{
            next('/login')   //路由指向
        }    // console.log('不存在')
    }
    // next() //一定要写
})
//     if(to.path==='/login'){
//         next()
//     }
//     else{
//         if(whiteRouter.indexOf(to.path)!==-1){
//             next()
//         }
//         else{
//             next('/login')  // 路由指向
//         }
//     }
// })
// // router.beforeEach((to, from, next) => {
// //     // if(to.path==='/login'){

// //     //     next()
// //     // }else{
// //     // if(whiteRouter.indexOf(to.path)!==-1){
// //     //     next()
// //     // }
// //     // else{
// //     //     next('/login')//路由指向
// //     // }
// //     // }

// //     if (getToKen()) {
// //         console.log('登录成功')
// //     }
// //     else {
// //         console.log('不存在')
// //         if (to.path === '/login') {
// //             next()
// //         }
// //         else {
// //             if (whiteRouter.indexOf(to.path) !== -1) {
// //                 console.log('存在')
// //                 next()
// //             }
// //             else {
// //                 next('/login')//路由指向
// //             }
// //         }
// //     }
// // })