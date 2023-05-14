<template>
  <div>
    <!-- 
       @subPrice = "fn"
       这里的fn不能加小括号,如果加上小括号,那么孩子传递过来的参数就会被忽略
     -->
     <Product v-for="(obj, ind) in list" :key="obj.id"
      :title="obj.proname"
      :price="obj.proprice"
      :intro="obj.info"
      :index="ind"
      @subPrice = "fn"
     ></Product>
  </div>
</template>
<script>
import Product from './components/MyProduct_sub.vue';
export default {
  data() {
    return {
      list: [
        { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
        { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
        { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
      ],
    }
  },
  components: {
     Product
  },
  methods: {
     fn(index, price) {
      this.list[index].proprice > 1 && (this.list[index].proprice = (this.list[index].proprice - price).toFixed(1));
     }
  }
}
</script>

<style lang="scss" scoped></style>