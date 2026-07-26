<template>
  <v-container fluid class="pa-0">
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Our Services</h1>
        <p class="page-subtitle">Comprehensive solutions tailored to your needs</p>
      </v-container>
    </section>

    <section class="services-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" v-for="service in services" :key="service.title" class="mb-8">
            <v-card class="service-card" elevation="3" height="100%">
              <v-card-text class="pa-8">
                <v-icon :icon="service.icon" size="72" color="#d9202a" class="mb-4"></v-icon>
                <h3 class="service-title mb-4">{{ service.title }}</h3>
                <p class="service-description mb-4">{{ service.description }}</p>
                <v-list density="compact" class="service-features">
                  <v-list-item v-for="feature in service.features" :key="feature">
                    <template v-slot:prepend>
                      <v-icon icon="mdi-check-circle" color="#d9202a" size="small"></v-icon>
                    </template>
                    <v-list-item-title>{{ feature }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
const services = [
  {
    icon: 'mdi-school',
    title: 'Mathematics Education',
    description: 'Expert education programs designed to build strong mathematical foundations.',
    features: [
      'Curriculum Development',
      'Teacher Training',
      'Student Tutoring',
      'Educational Consulting',
      'Assessment & Evaluation',
    ],
  },
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Digital Solutions',
    description: 'Intelligent digital solutions tailored to transform your business operations.',
    features: [
      'Web Development',
      'Mobile Applications',
      'Software Consulting',
      'System Integration',
      'Cloud Solutions',
    ],
  },
  {
    icon: 'mdi-chart-line',
    title: 'Data Analytics',
    description: 'Full-scale data analytics services that turn raw data into actionable insights.',
    features: [
      'Business Intelligence',
      'Predictive Analytics',
      'Data Visualization',
      'Statistical Analysis',
      'Machine Learning',
    ],
  },
];
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #b8c5d6;
}

.services-section {
  background-color: #f5f5f5;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.service-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}

.service-description {
  color: #666;
  line-height: 1.6;
}

.service-features {
  background-color: transparent;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
