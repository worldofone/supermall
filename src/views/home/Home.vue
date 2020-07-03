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

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>
   
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper"
import HomeRecommendView from "./childcomps/HomeRecommendView"
import HomeWeekPopular from "./childcomps/HomeWeekPopular"

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  methods: {},
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeWeekPopular
  },
  created() {
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

</style>