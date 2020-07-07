<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="middle">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <!-- 每日推荐 -->
    <home-recommend-view :recommends="recommends" />
    <!-- 每周流行 -->
    <home-week-popular />

    <!-- tabControl -->
    <tab-control class="tab-control" :titles="showType"  @tabClick="tabClick"/>

    <!-- 商品列表 -->
    <good-list :goods="showGoods"/>

    
  </div>
</template>

<script>
import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommendView from "./childcomps/HomeRecommendView";
import HomeWeekPopular from "./childcomps/HomeWeekPopular";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from 'components/content/goodlist/GoodList'

import { getHomeMultidata, getHomeDateGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      currentType:'pop',
      banners: [],
      recommends: [],
      goods: {
        //用于存储后台请求的流行，新款，精品的数据
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    };
  },
  computed:{
    showGoods() { 
      return this.goods[this.currentType].list
    },
    showType() {
      return ['流行','新款','精选']
    }

  },
  methods: {
    /**
     * 事件监听的相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
      }

    },

    /**
     * 网络请求的相关方法
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          //将数据存储到组件中，该操作是异步，函数执行完后数据会回收
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          //如何查看该组件有数据了呢？可以查看devtools工具
        })
        .catch(err => {
          console.log(err);
        });
    },

    getHomeDateGoods(type) {
      let page = this.goods[type].page + 1
      getHomeDateGoods(type, page)
        .then(res => {
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
        })
        .catch(err => {});
    }
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeWeekPopular,
    NavBar,
    TabControl,
    GoodList
  },
  created() {
    //created中不做逻辑处理
    this.getHomeMultidata() //请求多个数据
    //请求商品数据
    this.getHomeDateGoods('pop')
    this.getHomeDateGoods('new')
    this.getHomeDateGoods('sell')
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.nav-home {
  background: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  /* 相当于sticky和fixed结合，浏览器会解析当top为44px时，position会变成fixed */
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>