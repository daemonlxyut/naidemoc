<template>
<div id="home">
  <!-- About nAIdemoc -->
  <v-row justify="center" class="px-8 py-6">
    <v-card width="95%" max-width="600px">
      <!-- Main Image -->
      <v-img max-height="calc(100vh - 56px - 36px - 24px - 50px)" :src="require('@/assets/home/bg.png')">
        <v-layout justify-center align-center>
          <v-img 
            contain
            max-width="80%"
            max-height="calc(100vh - 56px - 36px - 24px - 50px)"
            :src="require('@/assets/home/main.png')"
          />
        </v-layout>
      </v-img>

      <!-- Description -->
      <v-card-title class="px-8">{{ product }}</v-card-title>
      <v-card-text class="px-8">
        コンピュータが笑いを取る時代が来た！？
        <br/>
        {{ product }} は機械学習を応用したツッコミチャットBOTです。
        <br/>
        あなたのボケに応じてツッコミを返してくれます。
      </v-card-text>

      <v-layout justify-center class="py-3">
        <v-btn
          color="deep-orange"
          class="ma-2 pa-5 white--text"
          rounded
          :to="'/chat'"
        >
          Go to Chat
          <v-icon right dark>
            mdi-chat
          </v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </v-row>

  <!-- How to Play -->
  <v-row justify="center" class="px-8 py-3">
    <v-card width="95%" max-width="600px" class="py-3">
      <v-card-title class="px-8">How to Play</v-card-title>
      <v-layout justify-center class="px-4 py-3">
        <v-img
          contain
          max-width="100%"
          max-height="calc(100vh - 56px - 36px - 24px - 50px)"
          :src="require('@/assets/home/howToPlay.gif')"
        />
      </v-layout>
      <v-layout justify-center class="py-3">
        <v-btn
          color="deep-orange"
          class="ma-2 pa-5 white--text"
          rounded
          :to="'/chat'"
        >
          Go to Chat
          <v-icon right dark>
            mdi-chat
          </v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </v-row>

  <!-- Technologies -->
  <v-row justify="center" class="px-8 py-3">
    <v-card width="95%" max-width="600px" class="px-8 py-3">
      <v-card-title>Technologies</v-card-title>
      <v-carousel height="auto" show-arrows-on-hover hide-delimiter-background light>
        <v-carousel-item
          v-for="(item,i) in techDesc"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-img
            contain
            max-width="100%" 
            max-height="calc(100vh - 56px - 36px - 24px - 50px)"
            :src="item.path"
          />
        </v-carousel-item>
      </v-carousel>
      <v-layout justify-center class="py-3">
        <v-btn
          color="deep-orange"
          class="ma-2 pa-5"
          outlined
          rounded
          href="https://github.com/daemonlxyut/naidemoc"
        >
          Go to Repository
          <v-icon right >
            mdi-github
          </v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </v-row>

  <!-- About nonodebris.com -->
  <v-row justify="center" class="px-8 py-6">
    <v-card width="95%" max-width="600px" class="px-8 py-3">
      <v-card-title>{{ team }}</v-card-title>
      <v-card-text>
        {{ team }} は宇宙と技術をこよなく愛する有志の学生チームです。
      </v-card-text>
      <v-layout justify-center class="py-3">
        <v-btn
          color="light-blue lighten-2"
          class="ma-2 pa-5"
          outlined
          rounded
          :to="'/nonodebris-com'"
        >
          Our Information
          <v-icon right dark>
            mdi-star-shooting
          </v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </v-row>

  <!-- Footer -->
  <v-footer color="#350800" class="white--text">
    <v-spacer/>
    <span>&copy; 2021 {{ team }}</span>
    <v-spacer/>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    source: String,
  },
  data () {
    return {
      product: 'nAIdemoc',
      team: 'nonodebris.com',
      techDesc: [
        {
          description: "System Overview",
          path: require("@/assets/home/desc1.png"),
        },
        {
          description: "Data Flow",
          path: require("@/assets/home/desc2.png"),
        },
      ],
    }
  }
}
</script>


<style scoped>
</style>