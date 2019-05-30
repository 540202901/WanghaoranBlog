<template>
  <div id="app">
    <BackgroundImgContainer></BackgroundImgContainer>
    <div class="app-container" @scroll.passive="navPositionTop" ref="app">
      <HeaderContainer></HeaderContainer>
      <NavContainer  ref="nav"></NavContainer>
      <MainContainer></MainContainer>
    </div>
  </div>
</template>

<script>
import BackgroundImgContainer from './components/BackgroundImgsContainer.vue'
import HeaderContainer from './components/HeaderComponent.vue'
import NavContainer from './components/NavComponent.vue'
import MainContainer from './components/MainComponent.vue'

export default {
  name: 'App',
  data: function () {
    return {
      navPositionNum: 60 // 导航栏距离顶部固定位置的距离
    }
  },
  mounted () {
  },
  methods: {
    navPositionTop () {
      let app = this.$refs.app
      let scrollTop = app.scrollTop
      let nav = this.$refs.nav.$el
      let navY = this.navPositionNum

      // 如果滚动条距离顶部位置到达 导航栏 距离顶部位置 那么让导航栏置顶
      if (scrollTop >= navY) {
        nav.classList.add('nav-fixed')
      } else {
        nav.classList.remove('nav-fixed')
      }
    }
  },
  components: {
    BackgroundImgContainer, HeaderContainer, NavContainer, MainContainer
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .app-container{
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;

    .nav-fixed{
      height: 70px!important;
      position:fixed;
      top: 0;
      @media screen and (max-width: 600px){
        height: 45px!important;
      }
    }
  }
}
</style>
