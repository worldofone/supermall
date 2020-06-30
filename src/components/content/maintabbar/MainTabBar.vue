<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/homeactive.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <img slot="item-icon" src="~assets/img/tabbar/sort.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/sortactive.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/cartactive.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/profileactive.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>

</style>