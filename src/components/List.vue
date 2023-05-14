<template>
    <ul class="my-product">
        <li v-for="(item, index) in arr" :key="index">
            <span>{{ item.proname }}</span>
            <span>{{ item.proprice }}</span>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: ['arr'],
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