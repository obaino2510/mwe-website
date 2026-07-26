<template>
  <v-container fluid class="pa-0">
    <section class="hero-section">
      <v-container>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="8">
            <h1 class="hero-title mb-4">Mathematics World of Excellence</h1>
            <p class="hero-subtitle mb-6">
              A math-driven strategy and solutions company delivering expert education,
              full-scale data analytics, and intelligent digital solutions across every industry.
            </p>
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
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%);
  color: white;
  padding: 120px 0;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #b8c5d6;
  line-height: 1.6;
}

.features-section {
  background-color: #f5f5f5;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a2f4a;
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a2f4a;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
