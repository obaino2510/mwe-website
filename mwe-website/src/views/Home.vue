<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section with Banner -->
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
          <v-col cols="12" md="10">
            <v-btn
              color="#d9202a"
              size="large"
              class="mr-4 mb-2"
              to="/services"
            >
              Explore Our Services
            </v-btn>
            <v-btn
              variant="outlined"
              color="white"
              size="large"
              class="mb-2"
              to="/contact-us"
            >
              Get In Touch
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- The Three Pillars Section -->
    <section class="pillars-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="section-title">The Three Pillars</h2>
          </v-col>
          <v-col cols="12" md="4" v-for="pillar in pillars" :key="pillar.title">
            <v-card class="pillar-card" elevation="2">
              <v-card-text class="text-center pa-8">
                <v-icon :icon="pillar.icon" size="64" color="white" class="mb-4"></v-icon>
                <h3 class="pillar-title mb-3">{{ pillar.title }}</h3>
                <p class="pillar-description mb-4">{{ pillar.description }}</p>
                <v-btn
                  variant="text"
                  color="#db2c34"
                  :to="pillar.link"
                >
                  See Full Service →
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Who We Serve Section -->
    <section class="who-we-serve-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="section-title">We Work With</h2>
          </v-col>
          <v-col cols="12" v-for="segment in clientSegments" :key="segment.title">
            <v-card class="client-segment-card mb-4" elevation="2">
              <v-card-text class="pa-6">
                <v-row align="center">
                  <v-col cols="12" md="9">
                    <h3 class="segment-title mb-3 text-on-surface">{{ segment.title }}</h3>
                    <p class="segment-description mb-0 text-on-surface">{{ segment.description }}</p>
                  </v-col>
                  <v-col cols="12" md="3" class="text-center text-md-right">
                    <v-btn
                      color="#d9202a"
                      size="large"
                      :to="segment.link"
                    >
                      Explore
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Why Choose MWE Section -->
    <section class="why-choose-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h2 class="section-title text-center mb-6">Why Choose MWE</h2>
            <p class="why-choose-text">
              At MWE, our work is built on strong analytical foundations, structured systems and workflow design, 
              the practical application of mathematics and data in both educational and industrial contexts, 
              responsible data handling, technology-enabled delivery, and a commitment to continuous improvement 
              — purposefully bridging the gap between the classroom and industry to ensure that mathematics is 
              not just taught but actively applied, solving real problems and driving measurable results in the 
              real world.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Banner -->
    <section class="cta-banner py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="cta-title mb-6">Ready to put mathematics to work for yourself or your organization?</h2>
            <v-btn
              color="#d9202a"
              size="x-large"
              to="/contact-us"
            >
              Contact Us Today
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
const pillars = [
  {
    icon: 'mdi-school',
    title: 'Mathematics Education & Academic Support',
    description: 'Precision-engineered mathematics education and Quantitative Intelligence solutions — from bespoke curricula and teacher training to personalised academic support, at every level.',
    link: '/services/mathematics-education',
  },
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Digital Solutions and Innovations',
    description: 'Intelligent digital solutions — researched, designed, and seamlessly delivered across every sector through our trusted technology partners.',
    link: '/services/digital-solutions',
  },
  {
    icon: 'mdi-chart-line',
    title: 'Data Analytics & Quantitative Solutions',
    description: 'From raw data to actionable intelligence — rigorous analysis, quantitative modelling, and evidence-based strategies that power smarter decisions.',
    link: '/services/data-analytics',
  },
];

const clientSegments = [
  {
    title: 'Schools & Academic Institutions',
    description: 'From bespoke curricula and teacher training to intelligent digital systems and full-scale data analytics — every solution tailored to your institution\'s needs, driving measurable learning outcomes at every level.',
    link: '/who-we-serve#schools',
  },
  {
    title: 'Corporate Organizations, Industries & Data-Driven Institutions',
    description: 'We design operational frameworks, build Quantitative Intelligence, and project-manage intelligent solutions that eliminate inefficiencies, reduce costs, and drive smarter decisions — across every industry.',
    link: '/who-we-serve#corporate',
  },
  {
    title: 'Individual Learners, Teachers & Parents',
    description: 'We design personalized learning strategies, develop custom academic support programs, and deliver expert tutoring and advisory services that build genuine mathematical competence and convert potential into consistent, measurable achievement.',
    link: '/who-we-serve#individuals',
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
  bottom: 60px;
  padding: 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  color: white;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  color: white;
}

.pillars-section {
  background-color: rgb(var(--v-theme-surface));
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.pillar-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
}

.pillar-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.pillar-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white !important;
}

.pillar-description {
  color: #b8c5d6 !important;
  line-height: 1.6;
}

.who-we-serve-section {
  background-color: rgb(var(--v-theme-surface-variant));
}

.who-we-serve-section .section-title {
  color: #1a1a1a !important;
}

.client-segment-card {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-segment-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.segment-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white !important;
}

.segment-description {
  line-height: 1.6;
  color: #b8c5d6 !important;
}

.text-on-surface {
  color: rgb(var(--v-theme-on-surface)) !important;
}

.why-choose-section {
  background-color: rgb(var(--v-theme-surface));
}

.why-choose-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgb(var(--v-theme-on-surface));
  text-align: center;
}

.cta-banner {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%);
  color: white;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
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
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .segment-title {
    font-size: 1.25rem;
  }
}
</style>
