<template>
  <div class="bg-img-container" ref="bgBox">
    <img :src="defaultImgSrc">
    <img :src="defaultImgSrc" style="opacity: 0;">
  </div>
</template>

<script>
export default {
  name: 'BackgroundImgsContainer',
  data: function () {
    return {
      bgImgList: [
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/000.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/001.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/002.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/003.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/004.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/005.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/006.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/007.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/008.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/009.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/010.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/011.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/012.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/013.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/014.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/015.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/016.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/017.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/018.jpg' },
        { img: 'http://img.wanghaoranblog.com/blog/main/Img/bg/019.jpg' }
      ],
      bgImgExArr: [],
      imgCount: 0,
      playImgNum: 1,
      imgBoxIndex: 0,
      defaultImgSrc: ''
    }
  },
  created () { // 一定要在创建完就去的defaultImgSrc  否则 是空字符串，无法正常显示img
    let randomIndex = this.getRandomIndex()// 随机取一个长度范围内的数字
    this.defaultImgSrc = this.bgImgList[randomIndex].img // 随机取一个图片地址 可以帮到到最初的图片上
  },
  mounted () {
    this.setInitImgExArr() // 设置背景图片数组
  },
  methods: {
    getRandomIndex () {
      return Math.round((Math.random() * (this.bgImgList.length - 1))) // 随机取一个长度范围内的数字
    },
    setInitImgExArr () {
      let bgImgList = this.bgImgList
      bgImgList.forEach(item => {
        let img = new Image() // 生命一个图片对象
        img.src = item.img // 获取数组中的图片地址
        img.onload = () => { // 当图片加载成功将其存入数组 这个是异步方法，所以顺序是不确定的
          this.bgImgExArr.push(img)
          this.imgCount++ // 加载完记录数值，用来未来判断是否全部加载完毕
        }
      })
    } // 设置背景图片数组
  },
  watch: {
    'imgCount': function (newVal) {
      let bgImgListCount = this.bgImgList.length
      if (bgImgListCount === newVal) {
        setInterval(() => {
          this.playImgNum = this.playImgNum === bgImgListCount ? 1 : this.playImgNum + 1 // 将需要播放的编号+1
          let bgBox = this.$refs.bgBox // 获取盒子
          // 记录盒子之间切换的值来获取新旧盒子
          let oldImgBox = bgBox.children[this.imgBoxIndex] // 抓取需要隐藏的盒子
          this.imgBoxIndex = this.imgBoxIndex === 0 ? 1 : 0 // 让盒子记录值 从 0 和 1之间切换
          let newImgBox = bgBox.children[this.imgBoxIndex] // 抓取需要显示的盒子
          let randomIndex = this.getRandomIndex()// 随机取一个长度范围内的数字
          let imgExSrc = this.bgImgExArr[randomIndex].src // 获取已经缓存好的图片地址

          oldImgBox.style.opacity = 0 // 让老盒子渐渐隐藏
          newImgBox.src = imgExSrc // 设置新盒子的地址
          newImgBox.style.opacity = 1 // 让新盒子显示
        }, 10000)
      }
    } // 如果全部加载完毕，就不断切换背景图片
  }
}
</script>

<style lang="scss" scoped>
  .bg-img-container{
    background:#f1f2f7  no-repeat center center;
    background-size: auto 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-wrap:wrap;
    img{
      height: 100%;
      width: 100%;
      min-width: 800px;
      transition: all 1s !important;
    }
    img:nth-last-child(1){
      transform:translateY(-100%) !important;
    }
  }
</style>
