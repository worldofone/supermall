<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active:index === currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    data() {
        return {
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default() {
                return 
            }
        }
    },
    methods:{
        itemClick(index) {
            this.currentIndex = index 
            this.$emit('tabClick',index) //将tabControl的index 传给home 使用this.$emit()自定义事件
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
}
.tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span {
    padding:5px;
}
.active span {
    border-bottom:2px solid var(--color-tint);
}
.active {
    color: var(--color-high-text);
    
}
</style>