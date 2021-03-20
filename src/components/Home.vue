<template>
  <div class="home">
    <div class="fig">
      <img src="@/assets/main.png" class="image1">
    </div>

    <div class="contents">
      <h2>{{ product }} について</h2>
      <p>
        コンピュータが笑いを取る時代が来た！？
        <br>
        {{ product }} は機械学習を応用したツッコミチャットBOTです。
        <br>
        あなたのボケに応じてツッコミを返してくれます。
      </p>
    </div>

    <div class="contents">
      <div class="btn">
        <router-link :to="{name: 'Chat'}">チャットへＧＯ！</router-link>
      </div>
    </div>

    <div class="contents">
      <h2>遊び方</h2>
      <div class="collection">
        <div class="card" v-for="(item, i) in howToPlay" v-bind:key="i">
          <div class="card-img"><img class="card-fig" v-bind:src="item.path"></div>
          <div class="card-desc"><p>{{ item.description }}</p></div>
        </div>
      </div>
    </div>

    <div class="contents">
      <div class="btn">
        <router-link :to="{name: 'Chat'}">チャットへＧＯ！</router-link>
      </div>
    </div>

    <div class="contents">
      <h2>{{ team }} について</h2>
      <p>
        {{ team }} は宇宙と技術をこよなく愛する有志の学生チームです。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      product: 'nAIdemoc',
      team: 'nonodebris.com',
      howToPlay: [
        {
          "step": 1,
          "description": "チャットでボケよう！",
          "path": require("@/assets/test_step1.png")
        },
        {
          "step": 2,
          "description": "AIがツッコミを返してくれる！",
          "path": require("@/assets/test_step2.png")
        },
        {
          "step": 3,
          "description": "気持ちをスタンプで表現！",
          "path": require("@/assets/test_step3.png")
        },
      ]
    }
  }
}
</script>


<style scoped>
/* メインの図について */
.fig {
  padding: 0;
  margin: 0;
  text-align: center;
  background: white;
}
.image1 {
  /* width: 100%; */
  max-height: calc(100vh - 60px);
  max-width: 100%;
  vertical-align: bottom;
}

/* コンテンツ */
.contents {
  margin: 20px;
  padding: 20px;
}

/* コンテンツの文字 */
.contents h2::first-letter {
  color: #FF4609;
}
.contents h2 {
  text-align: center;
  padding: 20px;
  font-size: 36px;
}
.contents p {
  text-align: center;
  padding: 10px;
  line-height: 2.0;
  font-size: 24px;
}

/* コンテンツの図形 */
.collection {
  padding: 0 10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 20px;
}
.card-img {
  padding: 10px 0;
}
.card-fig {
  position: relative;
  width: 380px;
}
.card-desc {
  text-align: center;
  margin: auto;
  padding: 10px 0;
}
.card-desc p {
  font-size: 24px;
  padding: 0;
  line-height: 1.5;
}

/* ボタン */
.btn {
  text-align: center;
}
.btn a {
  background: #31302F;
  color: #FFCC8A;
  border-radius: 100vh;
  padding: 20px 40px;
  text-decoration: none;
  font-size: 18pt;
}
.btn a:hover {
  background: #FF4609;
  color: #FFCC8A;
}
</style>