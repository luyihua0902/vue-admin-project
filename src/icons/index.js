import Vue from "vue";
import SvuIcon from "./SvgIcon";
Vue.component("svg-icon", SvuIcon);

// 第一个：参数
// 第二个：是否遍历子目录
// 第三个：定义遍历文件规则
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    // console.log(requireContext.keys())
    return requireContext.keys().map(requireContext)
};
requireAll(req);