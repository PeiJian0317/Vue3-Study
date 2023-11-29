<template>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <button @click="ChangeInfo">修改人的信息</button>
  <button @click="ChangAge">修改人的年龄</button>
  <h3>工作种类:{{ person.type }}</h3>
  <h3>工资薪水:{{ person.salary }}</h3>
  <h3>爱好是:{{ hobby }}</h3>
  <h3>学生性别是:{{ person.student.sex }}</h3>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "test",
  setup() {
    //数据
    let person = reactive({
      //数据
      name:'张三',
      age:19,
      type:"工程师",
      salary:'30k',
      student:{
        sex:'女'
      }
    })

    let hobby = reactive(['抽烟','喝酒','烫头'])

    function ChangeInfo(){
        person.type = '设计师',
        person.salary = '35k'
        hobby[0] = '学习'
    }
    function ChangAge() {
      person.age = 20
    }



    // 需要把结果返回出去(返回的是一个对象)
    return {
      person,
      ChangAge,
      ChangeInfo,
      hobby
    };

  },
};
</script>

<style></style>
