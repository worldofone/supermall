<template>
  <div class="tab-bar-item" @click="linkClick">
    <!-- 问题:所有的item都展示一个图片一个文字，该组件需要动态的插入一些图片文字 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      //定义一个变量，控制图片是否处于活跃状态
      // isActive: true,
      //使用props 
    }
  },
  computed:{
    isActive() {
      // /home == /home true
      // /home == /sort false
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    linkClick() {
      this.$router.push(this.path).catch(err =>{console.log('有异常');
      })
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>