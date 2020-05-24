<template>
  <div id="nav-wrap">
          <h1 class="logo"><img src="../../../assets/logo.png" alt=""></h1>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#344a5f"
      text-color="#fff"
      active--text-color="#fff"
      router
    > 
    <template  v-for="(item,index) in routers">
      <el-submenu v-if="!item.hidden" :key=item.id :index="index+''">
        <!--一级菜单 -->
        <template slot="title">
        <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
          <!-- <i class="el-icon-location"></i> -->
          <span slot="title">{{item.meta.name}}</span>
        </template>
        <!-- 子级菜单 -->
        <el-menu-item v-for="subItem in item.children" :key=subItem.id :index="subItem.path">{{subItem.meta.name}}</el-menu-item>

        <!-- <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      </template>
    </el-menu>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import { reactive,ref, computed } from '@vue/composition-api';
export default {
 name:'navMenu',

 setup(props,{root}){
 
// const isCollapse=ref(false);
// const isCollapse=computed(()=>{
//   return root.$store.state.isCollapse
// })

const isCollapse = computed(() => root.$store.state.app.isCollapse);

const routers=reactive(root.$router.options.routes)
// console.log(routers)
// console.log(routers.meta)
console.log(root.$router);
 const handleOpen=(key, keyPath)=> {
        console.log(key, keyPath);
      };

const handleClose=(key, keyPath)=> {
        console.log(key, keyPath);
      };
//  console.log(root.$store.state.isCollapse)
  // root.$store.commit('SET_COUNT',100)

 return {
   isCollapse,
   routers
 }

 }

}
</script>

<style lang="scss" scoped>
#nav-wrap {
  position: fixed;
  width: 250px;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #344a5f;
}
.logo {
  text-align: center;
  img { 
    margin: 28px auto 25px;
    width: 92px;
    @include webkit(transition, all .3s ease 0s);
  }
}

</style>