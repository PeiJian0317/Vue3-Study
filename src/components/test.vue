<template>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <button @click="showTitle">点我触发弹窗</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "test",
  beforeCreate(){
    console.log('---beforeCreate---')
  },
  props:['msg','info'],
  emits:['hello'],
  setup(props,context) {
    console.log('---setup---',props,context)
    //数据
    let person = reactive({
      //数据
      name:'张三',
      age:19,
    })

    function showTitle(){
      context.emit('hello',20)
    }

    // 需要把结果返回出去(返回的是一个对象)
    return {
      person,
      showTitle
    };

  },
};
</script>

<style></style>
