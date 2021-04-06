<template>
<div id="work">
  <v-row justify="center" class="px-8 py-6">
    <v-card width="95%" max-width="600px">
      <v-card-title>Res-CUE!!!</v-card-title>
      <v-card-subtitle>2018</v-card-subtitle>
      <v-card-text>
        GUGEN 2018 出展
      </v-card-text>
      <div class="tube px-8 py-3">
        <iframe 
          width="500px" height="350px"
          src="https://www.youtube.com/embed/ZGGGOiP5irA" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen 
        />
      </div>
    </v-card>
  </v-row>
  <v-row justify="center" class="px-8 py-6">
    <v-card width="95%" max-width="600px">
      <v-card-title>Plaundry</v-card-title>
      <v-card-subtitle>2020</v-card-subtitle>
      <v-card-text>
        JOINT Hack U KANAGAWA 2019 <a href="https://hacku.yahoo.co.jp/kanagawa2019/" class="text-decoration-none">最優秀賞</a>
      </v-card-text>
      <v-layout justify-center class="px-8 py-3">
        <v-img
          contain
          max-width="90%"
          max-height="calc(100vh - 56px - 36px - 24px - 50px)"
          :src="require('@/assets/work/plaundry.png')"
        />
      </v-layout>
    </v-card>
  </v-row>
  <v-row justify="center" class="px-8 py-6">
    <v-card width="95%" max-width="600px">
      <v-card-title>nAIdemoc</v-card-title>
      <v-card-subtitle>2021</v-card-subtitle>
      <v-card-text>
        Hack Day 2021 出場
      </v-card-text>
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
  name: 'Work',
  data () {
    return {
      team: "nonodebris.com",
    }
  }
}
</script>

<style scoped>
.tube {
  max-width: 100%;
  max-height: calc(100vh - 56px - 36px - 24px - 50px);
  aspect-ratio: 16 / 9;
  margin:auto;
}
.tube iframe {
  width: 100%;
  height: 100%;
}
</style>