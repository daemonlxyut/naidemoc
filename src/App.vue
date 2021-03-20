<template>
  <div id="app" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
    <tab-menu/>
    <router-view/>
  </div>
</template>

<script>
import TabMenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    TabMenu
  }
}
</script>

<style>
* {
  /* 枠幅の設定 */
  padding: 0;
  margin: 0;
}

#app {
  /* フォント系設定 */
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #31302f;

  min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
