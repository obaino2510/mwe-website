<template>
  <v-app-bar elevation="2" app color="white">
    <!-- Logo on the left -->
    <v-app-bar-title>
      <div class="d-flex align-center">
        <v-img
          src="/logo.png"
          alt="Logo"
          max-width="80"
          max-height="80"
          class="mr-2"
        />
        <!-- <span class="text-h6 font-weight-bold">MWE</span> -->
      </div>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation Links (hidden on mobile) -->
    <div class="d-none d-sm-flex align-center">
      <v-btn
        v-for="link in navLinks"
        :key="link.title"
        :to="link.to"
        variant="text"
        :class="['mx-1', 'nav-link-btn', { 'active-link': isActive(link.to) }]"
      >
        {{ link.title }}
      </v-btn>
    </div>

    <!-- Mobile Hamburger Menu (shown only on mobile) -->
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
  >
    <v-list>
      <v-list-item
        v-for="link in navLinks"
        :key="link.title"
        :to="link.to"
        :class="{ 'active-mobile-link': isActive(link.to) }"
        @click="drawer = false"
      >
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Mobile drawer state
const drawer = ref(false);

// Get current route
const route = useRoute();

// Navigation links
const navLinks = [
  { title: 'Home', to: '/' },
  { title: 'About Us', to: '/about-us' },
  { title: 'Services', to: '/services' },
  { title: 'Who we Serve', to: '/who-we-serve' },
  { title: 'Contact Us', to: '/contact-us' },
];

// Function to check if link is active
const isActive = (path: string) => {
  return route.path === path;
};
</script>

<style scoped>
.v-app-bar-title {
  cursor: pointer;
}

.nav-link-btn {
  position: relative;
  color: #333 !important;
  transition: color 0.3s ease;
  padding-bottom: 4px !important;
}

.nav-link-btn:hover {
  color: #d9202a !important;
}

.nav-link-btn::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background-color: #d9202a;
  transition: width 0.3s ease;
}

.nav-link-btn:hover::after {
  width: 70%;
}

/* Active link styling */
.nav-link-btn.active-link {
  color: #d9202a !important;
}

.nav-link-btn.active-link::after {
  width: 70% !important;
}

/* Mobile active link styling */
.active-mobile-link {
  color: #d9202a !important;
  border-left: 3px solid #d9202a;
}

.active-mobile-link .v-list-item-title {
  color: #d9202a !important;
  font-weight: 600;
}
</style>
