<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ intro }}</p>
        <button @click="subFn">宝刀-砍一元</button>
    </div>
</template>
  
<script>
export default {
    props: ['index','title', 'price', 'intro'],
    methods: {
        subFn() {
            // 错误
            // 1. 子组件更改父传入的数据，而不通知父亲，造成数据的不一致
            // 2. vue规定props本身是只读的，不允许重新赋值
            // this.price = this.price -1

            // 使用this.$emit() 规定方法-主动触发事件
            this.$emit('subPrice', this.index, 1)

        }
    }
}
</script>
  
<style>
.my-product {
    width: 400px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
}
</style>