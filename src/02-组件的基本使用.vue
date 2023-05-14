<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <!-- 4. 组件名当作标签使用 -->
    <PannelG></PannelG>
    <PannelL></PannelL>
  </div>
</template>

<script>
// 局部注册 (使用的多)
// 创建组件 - 文件名.vue
// 引入组件
import Pannel from './components/Pannel_1.vue';
export default {
   components: {
      PannelL: Pannel
   }
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
   
</style>
