<template>
  <div class="nav-bar">
      <!-- 头部栏使用插槽，有三个部分需要动态插入 -->
      <div class="left"><slot name="left"></slot></div>
      <div class="middle"><slot name="middle"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-bar {
        display: flex;
        /* line-heigth属性需要有内容才会撑起 */
        line-height: 44px; 
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
        color: #fff;
    }
    .left,.right{
        width: 60px;
    }
    .middle {
        flex:1;
    }
</style>