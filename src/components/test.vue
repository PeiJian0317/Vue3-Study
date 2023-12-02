<template>
  <h2>当前点击时鼠标的坐标为:x: {{ point.x }},y: {{ point.y }}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "test",
  setup() {
    const {point} = usePoint();

    // 需要把结果返回出去(返回的是一个对象)
    return {
      point
    };

  },
};
</script>

<style></style>
