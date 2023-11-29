<template>
  <test msg="Hello" info="World" @hello="showDialog"/>
</template>

<script>
import test from './components/test.vue';

export default {
  name: 'App',
  components: {
    test
  },
  setup(){
    function showDialog(data){
      alert(`成功触发,接收到了${data}!!!`)
    }
    
    return{
      showDialog
    }
  }
}
</script>
