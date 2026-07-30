<template>
  <v-container fluid class="pa-0">
    <section class="hero-section">
      <!-- Desktop Banner -->
      <div class="hero-banner-wrapper d-none d-md-block">
        <v-img
          src="/home-banner-desktop.png"
          alt="MWE Banner"
          class="hero-banner"
        />
      </div>
      
      <!-- Mobile Banner -->
      <div class="hero-banner-wrapper d-block d-md-none">
        <v-img
          src="/home-banner-mobile.png"
          alt="MWE Banner"
          class="hero-banner"
        />
      </div>
      
      <v-container class="hero-content">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="8">
            <v-btn
              color="#d9202a"
              size="large"
              class="mr-4"
              to="/contact-us"
            >
              Get Started
            </v-btn>
            <v-btn
              variant="outlined"
              color="#d9202a"
              size="large"
              to="/services"
            >
              Our Services
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="features-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="section-title">What We Offer</h2>
          </v-col>
          <v-col cols="12" md="4" v-for="feature in features" :key="feature.title">
            <v-card class="feature-card" elevation="2">
              <v-card-text class="text-center pa-8">
                <v-icon :icon="feature.icon" size="64" color="#d9202a" class="mb-4"></v-icon>
                <h3 class="feature-title mb-3">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
const features = [
  {
    icon: 'mdi-school',
    title: 'Mathematics Education',
    description: 'Expert education programs designed to build strong mathematical foundations and analytical thinking.',
  },
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Digital Solutions',
    description: 'Intelligent digital solutions tailored to transform your business operations and drive innovation.',
  },
  {
    icon: 'mdi-chart-line',
    title: 'Data Analytics',
    description: 'Full-scale data analytics services that turn raw data into actionable business insights.',
  },
];
</script>

<style scoped>
.hero-section {
  position: relative;
  color: white;
  width: 100%;
  overflow: hidden;
}

.hero-banner-wrapper {
  width: 100%;
  line-height: 0;
}

.hero-banner {
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 80px;
  padding: 0;
}

.features-section {
  background-color: rgb(var(--v-theme-surface));
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgb(var(--v-theme-surface-variant));
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}

.feature-description {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
  
  .hero-content {
    bottom: 40px;
  }
}
</style>
