<template>
  <div class="big-screen-nav-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba(255,255,255,0)"
      text-color="rgba(0,0,0,1)"
      active-text-color="#006cff"
      ref="menuParent"
    >
      <MenuBoxComponent
        v-for="(item) in navList"
        :key="item.index"
        :item="item"
        :ref="'menu-box' + item.index"
      >
      </MenuBoxComponent>
    </el-menu>
  </div>
</template>

<script>
import MenuBoxComponent from './MenuBoxComponent.vue'
export default {
  name: 'BigScreenNavComponent',
  data () {
    return {
      activeIndex: '1'
    }
  },
  mounted () {
    this.initMenu()
  },
  props: [ 'navList' ],
  methods: {
    initMenu () {
      let menuList = this.$refs // 抓取所有ref盒子
      let menuParent = this.$refs.menuParent.$el
      for (let key in menuList) { // 循环所有盒子
        if (key.includes('menu-box')) { // 如果ref盒子是 menu-box 盒子
          let menuBox = menuList[key][0].$el
          let menu = menuBox.children[0]

          menuBox.remove()
          menuParent.append(menu)
        }
      }
    }, // 删除渲染成功后外部包裹的 menu-box 盒子
    handleSelect (key, keyPath) {
      this.$emit('handleSelect', key, keyPath)
    } // 点击导航栏触发的事件
  },
  components: {
    MenuBoxComponent
  }
}
</script>

<style lang="scss" scoped>
  .big-screen-nav-container{
    .el-menu-demo{
      border: none !important;
    }
  }
</style>
