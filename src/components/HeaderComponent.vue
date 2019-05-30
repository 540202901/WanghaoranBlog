<template>
  <header class="header-container">
    <h4>欢迎来到王浩然的博客</h4>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
header.header-container{
  height: 40px;
  width: 100%;

  color: whitesmoke;
  display: flex;
  align-items:center;
  justify-content:center;

  h4{
    letter-spacing:2px;
  }

  transition:all 1s;

  background-color: rgba(0,0,0,.85);
}
header.header-container:hover{
  background-color: rgba(255,255,255,.1);
}

</style>
