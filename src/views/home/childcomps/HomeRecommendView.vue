<template>
  <div class="recommend-view">
    <div class="recommend-view-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend-view {
    display:flex;
    width:100%;
    font-size: 12px;
    text-align: center;
    padding:10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend-view-item {
    flex:1;
}
.recommend-view-item img{
    width:65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>