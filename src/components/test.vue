<template>
  姓:<input type="text" v-model="person.firstName">
  名:<input type="text" v-model="person.lastName">
  <h2>{{ person.fullname }}</h2>
</template>

<script>
import { reactive,computed } from 'vue';
export default {
  name: "test",
  setup() {
    //数据
    let person = reactive({
      firstName:"张",
      lastName:"三"
    })

    person.fullname = computed(() =>{
      return person.firstName + person.lastName
    })


    // 需要把结果返回出去(返回的是一个对象)
    return {
      person,
    };

  },
};
</script>

<style></style>
