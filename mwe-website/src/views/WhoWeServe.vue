<template>
  <v-container fluid class="pa-0">
    <!-- Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Who We Serve</h1>
      </v-container>
    </section>

    <!-- Client Segments -->
    <section class="segments-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" v-for="(segment, index) in segments" :key="index" class="mb-6">
            <v-card class="segment-card" elevation="2">
              <v-card-text class="pa-8">
                <v-row align="center">
                  <v-col cols="12" md="10">
                    <h3 class="segment-title mb-4">{{ segment.title }}</h3>
                    <p class="segment-description mb-4">{{ segment.description }}</p>
                  </v-col>
                  <v-col cols="12" md="2" class="text-center text-md-right">
                    <v-btn
                      color="#d9202a"
                      size="large"
                      @click="toggleDetails(index)"
                    >
                      {{ expandedSegments.includes(index) ? 'See less' : 'See more…' }}
                    </v-btn>
                  </v-col>
                </v-row>
                
                <!-- Expandable Details -->
                <v-expand-transition>
                  <div v-show="expandedSegments.includes(index)">
                    <v-divider class="my-4"></v-divider>
                    <v-list class="details-list" density="compact">
                      <v-list-item v-for="detail in segment.details" :key="detail.title" class="mb-3">
                        <v-list-item-title class="detail-title mb-2">{{ detail.title }}</v-list-item-title>
                        <v-list-item-subtitle class="detail-description">{{ detail.description }}</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const expandedSegments = ref<number[]>([]);

const toggleDetails = (index: number) => {
  const idx = expandedSegments.value.indexOf(index);
  if (idx > -1) {
    expandedSegments.value.splice(idx, 1);
  } else {
    expandedSegments.value.push(index);
  }
};

const segments = [
  {
    title: 'Schools & Academic Institutions',
    description: 'We develop bespoke curricula, train your teachers, design structured mathematics programs, deploy intelligent digital learning systems, and deliver full-scale data analytics solutions — all tailored specifically to your institution\'s needs, building strong academic foundations, enhancing operational efficiency, and driving measurable learning outcomes at every level.',
    details: [
      {
        title: 'Primary Schools',
        description: 'foundational mathematics curriculum design, teacher training, and personalised academic support that build strong mathematical competence from the earliest level'
      },
      {
        title: 'Secondary Schools',
        description: 'WAEC and UTME-aligned curriculum design, structured mathematics programmes, teacher training, and digital learning systems that maximise academic performance and examination results'
      },
      {
        title: 'Tertiary Institutions',
        description: 'advanced curriculum design, quantitative intelligence training, full-scale data analytics, and digital learning platforms that build mathematical depth and research capability at undergraduate and postgraduate level'
      },
      {
        title: 'Vocational & Technical Institutions',
        description: 'mathematics curricula aligned to specific trade and industry contexts, connecting quantitative theory directly to practical application'
      },
      {
        title: 'Private Tutorial Centres',
        description: 'bespoke curriculum frameworks, structured lesson plans, and WAEC and UTME preparation programmes designed to maximise student performance'
      },
      {
        title: 'Educational Administrators & School Leaders',
        description: 'Quantitative Intelligence advisory, data analytics, and digital systems that enhance institutional management, operational efficiency, and evidence-based decision-making'
      },
    ],
  },
  {
    title: 'Corporate Organizations, Industries & Data-Driven Institutions',
    description: 'Whether you are a corporate organization, a data-driven institution, or an industry player in manufacturing, healthcare, finance, oil and gas, or logistics — we strategically design operational frameworks, develop quantitative capability across your workforce, and project-manage intelligent digital and data solutions that eliminate duplicated and complicated processes, reduce operational costs, and deliver clear, actionable intelligence that drives smarter decisions and stronger organizational performance.',
    details: [
      {
        title: 'Logistics & Supply Chain',
        description: 'optimization, routing, inventory modelling, and demand forecasting'
      },
      {
        title: 'Construction & Engineering',
        description: 'quantitative analysis, project costing, structural modelling, and resource optimization'
      },
      {
        title: 'Telecommunications',
        description: 'statistical analysis, network optimization, and data-driven performance management'
      },
      {
        title: 'Agriculture & Agribusiness',
        description: 'yield modelling, financial planning, supply chain analytics, and operational optimization'
      },
      {
        title: 'Government & Public Sector',
        description: 'policy design, budget planning, performance measurement, and evidence-based decision-making'
      },
      {
        title: 'Insurance & Risk Management',
        description: 'actuarial Quantitative Intelligence, risk modelling, and statistical analysis'
      },
      {
        title: 'Retail & E-commerce',
        description: 'demand forecasting, pricing models, and customer analytics'
      },
      {
        title: 'Oil & Gas',
        description: 'quantitative analysis, operational optimization, and data-driven decision support'
      },
      {
        title: 'Healthcare',
        description: 'statistical analysis, resource optimization, and evidence-based operational management'
      },
      {
        title: 'Finance & Banking',
        description: 'financial Quantitative Intelligence, risk modelling, and quantitative analysis for strategic decision-making'
      },
      {
        title: 'Manufacturing',
        description: 'operational optimization, quality control analytics, and quantitative modelling for production efficiency'
      },
    ],
  },
  {
    title: 'Individual Learners, Teachers & Parents',
    description: 'We design personalized learning strategies, develop custom academic support programs, and deliver expert tutoring and advisory services that build genuine mathematical competence and convert potential into consistent, measurable achievement.',
    details: [
      {
        title: 'Primary School Learners',
        description: 'foundational mathematics support, personalised learning plans, and structured tutoring that build confidence, competence, and a lifelong love for mathematics from the earliest stage'
      },
      {
        title: 'Secondary School Learners',
        description: 'targeted academic support, WAEC and UTME preparation programmes, and personalised tutoring that maximise examination performance and open doors to tertiary education'
      },
      {
        title: 'Tertiary Level Learners',
        description: 'advanced mathematics tutoring, quantitative modelling support, and research advisory services that build the analytical depth required for academic and professional excellence'
      },
      {
        title: 'Working Professionals & Career Changers',
        description: 'Quantitative Intelligence development, data literacy training, and mathematical advisory services that enhance career performance and professional value in any industry'
      },
      {
        title: 'Teachers & Mathematics Educators',
        description: 'professional development, research-driven instructional advisory, and access to MWE\'s robust curriculum frameworks that elevate teaching quality and classroom outcomes'
      },
      {
        title: 'Parents',
        description: 'expert educational advisory, progress monitoring, and strategic guidance that empower parents to actively support their child\'s mathematical development and academic achievement'
      },
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
  margin-bottom: 0;
}

.segments-section {
  background-color: rgb(var(--v-theme-surface));
}

.segment-card {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.segment-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.segment-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white !important;
}

.segment-description {
  color: #b8c5d6 !important;
  line-height: 1.6;
  font-size: 1rem;
}

.see-more-btn {
  font-size: 1rem;
}

.details-list {
  background: transparent;
}

.detail-title {
  font-size: 1rem;
  font-weight: 600;
  color: white !important;
}

.detail-description {
  font-size: 0.95rem;
  color: #b8c5d6 !important;
  line-height: 1.6;
  white-space: normal;
  margin-top: 4px;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
  
  .segment-title {
    font-size: 1.25rem;
  }
}
</style>
