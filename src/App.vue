<template>
<div id="app">
  <v-app id="inspire">
    <!-- Title Bar -->
    <v-app-bar app color="#350800" dark clipped-left>
      <v-spacer/>
      <v-img contain max-height="60%" :src="require('@/assets/logo/nAIdemoc_white.png')" />
      <v-spacer/>
    </v-app-bar>

    <!-- Navigation Menu -->
    <v-navigation-drawer app clipped v-model="drawer" :mini-variant="mini" permanent>
      <v-list-item class="px-2">
        <v-btn icon @click="mini=!mini">
          <v-icon v-if="mini">mdi-menu</v-icon>
          <v-icon v-else>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.name" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Contents -->
    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
    <v-footer color="#350800" class="white--text">
      <v-spacer/>
      <span>&copy; 2021 {{ team }}</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
  data () {
    return {
      drawer: true,
      mini: true,
      items: [
        {
          name: "Home",
          path: "/",
          icon: "mdi-home",
        },
        {
          name: "Chat",
          path: "/chat",
          icon: "mdi-robot-excited",
        },
      ],
      team: "nonodebris.com"
    }    
  }
}
</script>

<style>
/* #app v-main {
  background-image: url('./assets/home/bg.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
} */
</style>