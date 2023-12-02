<template>
  <h2>{{ person }}</h2>
  <h2>{{ test }}</h2>
  <hr>
  <h2>name:{{ name }}</h2>
  <h2>age:{{ age }}</h2>
  <h2>sex:{{ sex }}</h2>
  <h2>salary:{{ job.s1.salary }}</h2>
  <button @click="job.s1.salary++">click => salary++</button>
  <hr>
  <h2>address:{{ test.address }}</h2>
  <button @click="test.address += '~'">address => salary+~</button>
</template>

<script>
import { reactive,shallowReactive,shallowRef,toRefs } from 'vue';
export default {
  name: "test",
  setup() {
    let person = shallowReactive({
      name:'zs',
      age:19,
      sex:'b',
      job:{
        s1:{
          salary:8000
        }
      }
    })
    let test = shallowRef({
      address:'shanghai'
    })

    // 需要把结果返回出去(返回的是一个对象)
    return {
      person,
      test,
      ...toRefs(person)
    };

  },
};
</script>

<style></style>
