<template>
  <h2>name:{{ name }}</h2>
  <h2>age:{{ age }}</h2>
  <h2>sex:{{ sex }}</h2>
  <h2>salary:{{ job.s1.salary }}</h2>

</template>

<script>
import { reactive,toRefs } from 'vue';
export default {
  name: "test",
  setup() {
    let person = reactive({
      name:'zs',
      age:19,
      sex:'b',
      job:{
        s1:{
          salary:8000
        }
      }
      
    })

    // 需要把结果返回出去(返回的是一个对象)
    return {
      ...toRefs(person)
    };

  },
};
</script>

<style></style>
