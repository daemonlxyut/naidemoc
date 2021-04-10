<template>
<div id="app">
  <v-app id="inspire">
    <!-- Title Bar -->
    <v-app-bar app color="#350800" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-spacer/>
      <v-img contain height="60%" width="60%" :src="require('@/assets/logo/nAIdemoc_white.png')" />
      <v-spacer/>
      <v-avatar/>
    </v-app-bar>

    <!-- Navigation Menu -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-row justify="center" class="px-6 py-8">
        <v-img contain height="30px" :src="require('@/assets/logo/nAIdemoc_gray.png')" />
      </v-row>
      <v-list>
        <v-divider />
        <v-list-item v-for="(item, i) in items" :key="i" link :to="item.path" @click="drawer=false">
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
        {
          name: "nonodebris.com",
          path: "/nonodebris-com",
          icon: "mdi-star-shooting",
        },
      ],
      team: "nonodebris.com"
    }
  }
}
</script>
