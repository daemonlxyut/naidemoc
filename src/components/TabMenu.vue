<template>
  <!-- ヘッダー全体 -->
  <div class="header">
    <!-- ロゴマーク -->
    <div class="logo">
      <img src="@/assets/naidemoc.png" class="fig">
    </div>

    <!-- リンクメニュー -->
    <ul class="menu">
      <li v-for="(item, index) in items" :key=index>
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'Home', path: '/' },
        { title: 'Chat', path: '/chat' },
      ]
    }
  }
}
</script>

<style scoped>
/* ヘッダー全体 */
.header {
  background: #350800;
  height: 60px;
  padding: 0 10%;
}

/* ロゴ部分 */
.logo {
  padding: 10px 0 0 0;
  float: left;
}
.fig {
  height: 40px;
}

/* リンク部分 */
.menu {
  float: right;
  line-height: 60px;
}
.menu li {
  padding: 0 20px;
  display: inline-block;
}
.menu a {
  color: #fffcf3;
  text-decoration: none;
}
.menu a:hover {
  color: #ff8800;
}

</style>