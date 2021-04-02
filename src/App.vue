<template>
<div id="app">
  <v-app id="inspire">
    <!-- Title Bar -->
    <v-app-bar app color="#350800" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-spacer/>
      <v-img contain max-height="60%" :src="require('@/assets/logo/nAIdemoc_white.png')" />
      <v-spacer/>
    </v-app-bar>

    <!-- Navigation Menu -->
    <v-navigation-drawer app v-model="drawer">
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
      drawer: null,
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
