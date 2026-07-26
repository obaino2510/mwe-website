<template>
  <v-app>
    <NavBar />
   
    <v-main>
      <router-view />
    </v-main>
    
    <Footer />
    
    <v-btn
      class="ma-2"
      icon="mdi-theme-light-dark"
      location="top right"
      position="absolute"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>

<script lang="ts" setup>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
</script>