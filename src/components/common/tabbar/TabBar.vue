<template>
  <div id="tab-bar">
      <!-- 使用插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 固定在底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* tab-bar上面有一小部分阴影 */
  box-shadow: 0 -3px 10px rgba(64, 117, 216, 0.3);
}

</style>