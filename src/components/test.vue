<template>
 <h2>当前求和为:{{ sum }}</h2>
 <button @click="sum++">点击加</button>
 <hr>
 <h2>当前文字为:{{ msg }}</h2>
 <button @click="msg += '!'">点击修改文字</button>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  name: "test",
  setup() {
    let sum = ref(0)
    let msg = ref('测试')

    //情况一:监视一个ref定义的响应式数据时
    // watch(sum,(newValue,oldValue) =>{
    //   console.log(newValue,oldValue)
    // })

    //情况二:监视多个ref定义的响应式数据时 --->写成数组形式
    watch([sum,msg],(newValue,oldValue) =>{
      console.log(newValue,oldValue)
    })


    // 需要把结果返回出去(返回的是一个对象)
    return {
      sum,
      msg
    };

  },
};
</script>

<style></style>
