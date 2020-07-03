<template>
  <!-- 轮播图展示 --> 
   <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
  </swiper>
<!-- element ui 的轮播图 -->
  <!-- <el-carousel :interval="4000" type="card" height="150px">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt style="height:150px" />
      </a>
    </el-carousel-item>
  </el-carousel> -->

</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
};
</script>

<style>
</style>