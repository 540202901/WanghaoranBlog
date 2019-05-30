<template>
  <div>
    <el-menu-item :index="item.index" v-if="item.type === 'el-menu-item'">
      {{ item.title }}
    </el-menu-item>

    <el-submenu :index="item.index" v-if="item.type === 'el-submenu'" ref="menuParent">
      <template slot="title" >{{ item.title }}</template>
      <!--循环子导航列表-->
      <MenuBoxComponent
        v-for="(subItem) in item.submenu"
        :key="subItem.index"
        :item="subItem"
        :ref="'menu-box' + item.index"
      >
      </MenuBoxComponent>
    </el-submenu>
  </div>
</template>

<script>
import MenuBoxComponent from './MenuBoxComponent.vue'
export default {
  name: 'MenuBoxComponent',
  props: [ 'item' ],
  components: {
    MenuBoxComponent
  },
  mounted () {
    // this.initMenu()
  },
  methods: {
    initMenu () {
      let menuList = this.$refs // 抓取所有ref盒子
      let menuParent = this.$refs.menuParent
      if (menuParent === undefined) return // 如果不存在父盒子 就退出
      menuParent = menuParent.$el

      for (let key in menuList) { // 循环所有盒子
        if (key.includes('menu-box')) { // 如果ref盒子是 menu-box 盒子
          let menuBox = menuList[key][0].$el
          let menu = menuBox.children[0]

          menuBox.remove()
          menuParent.append(menu)
        }
      }
    } // 删除渲染成功后外部包裹的 menu-box 盒子
  }
}
</script>

<style lang="scss" scoped>

</style>
