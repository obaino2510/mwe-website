<template>
  <v-container fluid class="pa-0">
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Who We Serve</h1>
        <p class="page-subtitle">Partners across diverse industries and sectors</p>
      </v-container>
    </section>

    <section class="industries-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="4" v-for="industry in industries" :key="industry.title" class="mb-6">
            <v-card class="industry-card" elevation="2">
              <v-card-text class="text-center pa-6">
                <v-icon :icon="industry.icon" size="64" color="#d9202a" class="mb-4"></v-icon>
                <h3 class="industry-title mb-3">{{ industry.title }}</h3>
                <p class="industry-description">{{ industry.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
const industries = [
  {
    icon: 'mdi-school-outline',
    title: 'Educational Institutions',
    description: 'Schools, colleges, and universities seeking to enhance mathematics education and learning outcomes.',
  },
  {
    icon: 'mdi-office-building',
    title: 'Corporations',
    description: 'Businesses looking for data-driven insights and digital transformation solutions.',
  },
  {
    icon: 'mdi-hospital-building',
    title: 'Healthcare',
    description: 'Healthcare organizations utilizing data analytics for improved patient care and operations.',
  },
  {
    icon: 'mdi-finance',
    title: 'Financial Services',
    description: 'Banks and financial institutions leveraging analytics for risk management and forecasting.',
  },
  {
    icon: 'mdi-account-group',
    title: 'Government Agencies',
    description: 'Public sector organizations implementing data-driven policy and decision-making.',
  },
  {
    icon: 'mdi-handshake',
    title: 'NGOs & Nonprofits',
    description: 'Organizations using data and technology to maximize their social impact.',
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

.industries-section {
  background-color: white;
}

.industry-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.industry-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a2f4a;
}

.industry-description {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
