<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <!-- 子路由显示区 -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
#main-wrap {
  height: 100vh;
  position: fixed;
  left: 250px;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  // -webkit-box-sizing: border;
}

.main-content {
  width: 100%;
  height: 100%;
  padding-top: $layoutHeader + 30;
  padding-right: 30px;
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all 0.3s ease 0s);
}

</style>