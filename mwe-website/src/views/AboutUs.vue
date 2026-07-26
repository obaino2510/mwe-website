<template>
  <v-container fluid class="pa-0">
    <section class="page-header">
      <v-container>
        <h1 class="page-title">About Us</h1>
        <p class="page-subtitle">Learn more about Mathematics World of Excellence</p>
      </v-container>
    </section>

    <section class="content-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="mb-8">
            <h2 class="section-heading mb-4">Our Story</h2>
            <p class="mb-4">
              Founded in 2017 in Lagos & Awka, Nigeria, Mathematics World of Excellence Ltd
              has been at the forefront of delivering math-driven strategy and solutions.
            </p>
            <p class="mb-4">
              We are a company dedicated to delivering expert education, full-scale data analytics,
              and intelligent digital solutions across every industry. Our approach combines
              mathematical rigor with practical business applications.
            </p>
            <p>
              With years of experience and a team of dedicated professionals, we've helped
              numerous organizations transform their operations through data-driven insights
              and innovative solutions.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="2" class="pa-8">
              <h3 class="mb-4">Our Mission</h3>
              <p class="mb-6">
                To empower individuals and organizations through mathematics, data analytics,
                and technology, driving innovation and excellence across all sectors.
              </p>
              <h3 class="mb-4">Our Vision</h3>
              <p>
                To be the leading provider of math-driven solutions in Africa, recognized
                for our commitment to education, innovation, and transformative impact.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
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

.content-section {
  background-color: white;
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1a2f4a;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
