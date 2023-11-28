<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="sayHello">点击弹窗</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: "test",
  setup() {
    //数据
    let name = "张三";
    let age = 19;
    function sayHello() {
      alert(`我叫${name},我${age}岁了,你好啊!`);
    }
    //需要把结果返回出去(返回的是一个对象)
    // return {
    //   name,
    //   age,
    //   sayHello,
    // };

    //渲染函数(了解)
    return ()=>{return h('h1','测试')}  //完整写法(有两个return)
    // return ()=>(h('h1','测试'))  //精简写法,效果是一样的
  },
};
</script>

<style></style>
