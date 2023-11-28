<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="ChangeInfo">修改人的信息</button>
  <button @click="ChangAge">修改人的年龄</button>
  <h3>工作种类:{{ job.type }}</h3>
  <h3>工资薪水:{{ job.salary }}</h3>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "test",
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(19);
    let job = ref({
        type:"工程师",
        salary:"30k"
    })

    function ChangeInfo(){
        job.value.type = '设计师',
        job.value.salary = '35k'
    }
    function ChangAge() {
      age.value = 20
    }
    // 需要把结果返回出去(返回的是一个对象)
    return {
      name,
      age,
      job,
      ChangAge,
      ChangeInfo,
      
    };

  },
};
</script>

<style></style>
