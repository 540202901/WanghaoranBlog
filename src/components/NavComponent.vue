<template>
  <nav class="nav-container">
    <div class="menu-box">
      <img src="http://img.wanghaoranblog.com/blog/main/Img/nav/logo.png" class="logo">

      <BigScreenNav class="big-screen-menu" @handleSelect="handleSelect" :navList="navList"></BigScreenNav>

      <el-button type="success"  style="margin-right:15px"  icon="el-icon-search" size="mini"></el-button>

      <el-button class="small-screen-menu" type="message" icon="el-icon-menu" size="mini"></el-button>

    </div>
  </nav>
</template>

<script>
import BigScreenNav from './nav_sub_components/BigScreenNavComponent.vue'
export default {
  name: 'NavComponent',
  data () {
    return {
      activeIndex: '1',
      navList: [
        { index: '0', title: '首页', type: 'el-menu-item' },
        { index: '1', title: '博客', type: 'el-menu-item' },
        {
          index: '2',
          title: 'Web前端',
          type: 'el-submenu',
          submenu: [
            {
              index: '2-1',
              title: '项目构建',
              type: 'el-submenu',
              submenu: [
                { index: '2-1-1', title: 'web前端', type: 'el-menu-item' },
                { index: '2-1-2', title: 'node.js后端', type: 'el-menu-item' }
              ]
            },
            { index: '2-2', title: 'Javascript', type: 'el-menu-item' },
            { index: '2-3', title: 'HTML', type: 'el-menu-item' },
            { index: '2-4', title: 'CSS', type: 'el-menu-item' },
            { index: '2-5', title: '前端框架', type: 'el-menu-item' }
          ]
        },
        {
          index: '3',
          title: '其他',
          type: 'el-submenu',
          submenu: [
            { index: '3-1', title: '学习项目', type: 'el-menu-item' },
            { index: '3-2', title: '其他技术', type: 'el-menu-item' }
          ]
        },
        { index: '4', title: '友链', type: 'el-menu-item' },
        { index: '5', title: '留言板', type: 'el-menu-item' }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    BigScreenNav
  }
}
</script>

<style lang="scss"  scoped>
  .nav-container{
    transition: all .2s !important;
    margin:0;
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px !important;
    background-color: rgba(255,255,255,.1);
    box-shadow: -1px 1px 5px rgba(255,255,255,.15) , 1px -1px 5px rgba(255,255,255,.15) !important;
    .menu-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1000px !important;
      height: 100%;
      width: 100%;
      position: relative;
      img{
        height: 80%;
      }
    }

    span{
      text-shadow: 0.1px 0.5px 1px rgba(255,255,255,.5);
    }

    .small-screen-menu{
      display: none;
      margin-right: 15px;
    }

  }

  .nav-container:hover{
    background-color: rgba(255,255,255,.85);
  }

  @media screen and (max-width: 700px){
    .nav-container{
      background-color: rgba(255,255,255,.1);
      height: 40px !important;
      .menu-box {
        .el-menu-demo{
          width: 100%;
        }
        img {
          margin-left: 15px;
        }
        .big-screen-menu{
          display: none;
        }
        .small-screen-menu{
          display: block !important;
        }
      }
    }

    .nav-container:hover{
      background-color: rgba(255,255,255,.3);
    }
  }

</style>
