<template>
  <v-container fluid class="pa-0">
    <!-- Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Our Services</h1>
        <p class="page-subtitle">
          Three integrated service areas. One mathematical foundation. Endless possibilities.
        </p>
      </v-container>
    </section>

    <!-- Intro Paragraph -->
    <section class="intro-section py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <p class="intro-text mb-4">
              At MWE, every service we deliver is built on the same rigorous mathematical thinking, strategic design, 
              and commitment to measurable outcomes. Whether you are a school seeking to transform your mathematics 
              curriculum, a corporation looking to build analytical capability across your workforce, an industry 
              player seeking to eliminate operational inefficiencies through data-driven intelligence, or an 
              individual learner determined to unlock your full mathematical potential; MWE has a purpose-built 
              solution designed specifically for you.
            </p>
            <p class="intro-text">
              Explore our three integrated service areas below.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Service Areas -->
    <section class="services-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" v-for="service in services" :key="service.title" class="mb-6">
            <v-card class="service-card" elevation="2">
              <v-card-text class="pa-8">
                <v-row align="center">
                  <v-col cols="12" md="9">
                    <h3 class="service-title mb-4">{{ service.title }}</h3>
                    <p class="service-description mb-4">{{ service.description }}</p>
                  </v-col>
                  <v-col cols="12" md="3" class="text-center text-md-right">
                    <v-btn
                      color="#d9202a"
                      size="large"
                      :to="service.link"
                    >
                      Explore This Service
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Closing Call To Action -->
    <section class="cta-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="cta-title mb-6">
              Not sure which service is right for you? Let us help you find the perfect solution.
            </h2>
            <v-btn
              color="#d9202a"
              size="x-large"
              to="/contact-us"
            >
              Get In Touch
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
const services = [
  {
    title: 'Mathematics Education & Academic Support',
    description: 'From bespoke curriculum development and teacher training to personalized tutoring and corporate quantitative intelligence — MWE owns the complete process of building mathematical competence at every level, for every client, in every context.',
    link: '/services/mathematics-education',
  },
  {
    title: 'Digital Solutions & Innovations',
    description: 'We research, strategically design, and project-manage intelligent digital solutions and innovations — selecting the best technology partners for each specific client need and delivering seamlessly across schools, corporations, factories, industries, and individuals.',
    link: '/services/digital-solutions',
  },
  {
    title: 'Data Analytics & Quantitative Solutions',
    description: 'From raw data to boardroom-ready intelligence — MWE owns the full analytics process. We deliver rigorous data analysis, quantitative modelling, predictive analytics, and evidence-based strategies that drive smarter decisions and stronger outcomes across every industry.',
    link: '/services/data-analytics',
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
  font-style: italic;
}

.intro-section {
  background-color: rgb(var(--v-theme-surface));
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgb(var(--v-theme-on-surface));
  text-align: center;
}

.services-section {
  background-color: rgb(var(--v-theme-surface-variant));
}

.service-card {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white !important;
}

.service-description {
  color: #b8c5d6 !important;
  line-height: 1.6;
  font-size: 1rem;
}

.cta-section {
  background-color: rgb(var(--v-theme-surface));
}

.cta-title {
  font-size: 2rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .service-title {
    font-size: 1.25rem;
  }
}
</style>
