// import Cookie from "cookie_js";
// import { Register, Login } from "@/api/login";

// const app = {
//     state: {
//         // isCollapse:false,
//         // count:10
//         // isCollapse:JSON.parse(sessionStorage.getItem('isCollapse')) || false
//         isCollapse: JSON.parse(Cookie.get('isCollapse')) || false
//     },
//     //computed
//     getter: {
//         // count: state => state.count + 10,
//         // isCollapse: state => state.isCollapse,
//         //es5写法
//         //  count:function(state){
//         //    return state.count+10
//         //  }
//     },
//     //更改数据
//     mutations: {
//         SET_COLLAPSE(state) {
//             // console.log(333)
//             return state.isCollapse = !state.isCollapse,

//                 console.log(state.isCollapse),
//                 //sessionStorage 智能存储字符串类型
//                 // sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
//                 Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
//         }
//         // SET_COUNT(state,value){
//         //  state.count=value
//         //  console.log(state.count)
//         // }
//     },
//     actions: {
//         login(content, requestData) {
//             return new Promise((resolve, reject) => {
//                 Login(requestData).then((response) => {
//                     // console.log(response)
//                     resolve(response)
//                 }).catch(error => {
//                     reject(error)
//                 })
//             })
//         }
//     },

// }

// export default app


import { Login } from "@/api/login";
import { settoken,setUserName } from "../../utils/app";
// import { setToKen, removeToKen, removeUserName, setUserName, getUserName } from "@/utils/app";
const state = {
    // roles: [],
    // buttonPermission: [],
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    to_ken: '',
    username: ''
}

const getters = {
    isCollapse: state => state.isCollapse,
    // roles: state => state.roles,
    // buttonPermission: state => state.buttonPermission
}

const mutations = {  // 必须的  同步 没有回调处理事情
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse;
        // html5本地储存
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));

    },
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    },
    SET_ROLES(state, value) {
        state.roles = value;
    },
    SET_BUTTON(state, value) {
        state.buttonPermission = value;
    }
}

const actions = {  // 可以回调处理事情 
    // login(content, repuestData) {
    //     return new Promise((resolve, reject) => {
    //         Login(repuestData).then((response) => {
    //             let data = response.data.data
    //             // 普通的
    //             // content.commit('SET_TOKEN', data.toKen);
    //             // content.commit('SET_USERNAME', data.username);
    //             // 解构的
    //             commit('SET_TOKEN', data.token);
    //             commit('SET_USERNAME', data.username);
    //             setToKen(data.token);
    //             setUserName(data.username);
    //             resolve(response)
    //         }).catch(error => {
    //             reject(error)
    //         })
    //     })
    // },
   
    login(commit, requestData) {
        return new Promise((resolve, reject) => {
            Login(requestData).then((response) => {
                console.log(commit)
                console.log(response)
                let data = response.data.data
                console.log(data.token)
                commit('SET_TOKEN', data.token);
                commit('SET_USERNAME', data.username);
                settoken(data.token);
                setUserName(data.username);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    exit({ commit }) {
        return new Promise((resolve, reject) => {
            removeToKen();
            removeUserName();
            commit('SET_TOKEN', '');
            commit('SET_USERNAME', '');
            commit('SET_ROLES', []);
            resolve();
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
