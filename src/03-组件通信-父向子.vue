<template>
  <div>
    <!-- 
      目标： 父(App.vue) -> 子(MyProduct.vue) 分别传值
      需求：每次组件显示不同数据信息
      步骤(口诀)：
      1. 先到子组件中定义变量，准备接收
      2. 父组件给子组件的变量传值进去
     -->
     <Product title="好吃的口水鸡" price="50" intro="开业大酬宾，全场8折"></Product>
     <Product title="烤鸭" price="208" :intro="str"></Product>
     <Product title="骚鸡" price="202" intro="非常喜欢吃"></Product>
  </div>
</template>

<script>
import Product from './components/MyProduct.vue';
  export default {
    data() {
       return {
         str: '好贵呀，快啦呀，好吃'
       }
    },
    components: {
       Product
    }
  }
</script>

<style lang="scss" scoped>

</style>