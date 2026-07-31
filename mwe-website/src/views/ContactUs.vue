<template>
  <v-container fluid class="pa-0">
    <!-- Header -->
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">Let's put Quantitative Intelligence to work for you.</p>
      </v-container>
    </section>

    <!-- Intro Paragraph -->
    <section class="intro-section py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <p class="intro-text mb-4">
              Whether you are a school seeking to transform your mathematics curriculum, a corporation looking to 
              build Quantitative Intelligence across your workforce, an industry player seeking data-driven solutions, 
              or an individual learner ready to unlock your full potential, MWE is ready to listen, design, and deliver.
            </p>
            <p class="intro-text">
              Reach out to us today and let us build something exceptional together.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Form and Details -->
    <section class="contact-section py-16">
      <v-container>
        <v-row>
          <!-- Contact Form -->
          <v-col cols="12" md="7" class="mb-8">
            <v-card elevation="2" class="pa-8 contact-form-card">
              <h2 class="section-heading mb-6">Send Your Message</h2>
              <v-form @submit.prevent="submitForm">
                <div class="form-group mb-4">
                  <label class="form-label">Full Name *</label>
                  <v-text-field
                    v-model="form.name"
                    variant="outlined"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">Organisation / Institution (optional)</label>
                  <v-text-field
                    v-model="form.organization"
                    variant="outlined"
                    hide-details="auto"
                  ></v-text-field>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">Email Address *</label>
                  <v-text-field
                    v-model="form.email"
                    type="email"
                    variant="outlined"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">Phone Number *</label>
                  <v-text-field
                    v-model="form.phone"
                    variant="outlined"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">I Am A: *</label>
                  <v-select
                    v-model="form.category"
                    :items="categories"
                    variant="outlined"
                    required
                    hide-details="auto"
                  ></v-select>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">Service I Am Interested In: *</label>
                  <v-select
                    v-model="form.service"
                    :items="services"
                    variant="outlined"
                    required
                    hide-details="auto"
                  ></v-select>
                </div>
                
                <div class="form-group mb-4">
                  <label class="form-label">Message *</label>
                  <v-textarea
                    v-model="form.message"
                    variant="outlined"
                    rows="6"
                    required
                    hide-details="auto"
                  ></v-textarea>
                </div>
                
                <v-btn
                  type="submit"
                  color="#d9202a"
                  size="x-large"
                  block
                  :loading="loading"
                  :disabled="loading"
                >
                  {{ loading ? 'Sending...' : 'Send Message' }}
                </v-btn>
              </v-form>
            </v-card>
          </v-col>

          <!-- Contact Details -->
          <v-col cols="12" md="5">
            <v-card elevation="2" class="pa-8 contact-details-card">
              <h3 class="details-heading mb-6">Get In Touch</h3>
              
              <div class="contact-item mb-6">
                <v-icon icon="mdi-email" color="white" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Email</h4>
                  <a href="mailto:info@mwe.com.ng" class="contact-value">info@mwe.com.ng</a>
                </div>
              </div>
              
              <div class="contact-item mb-8">
                <v-icon icon="mdi-phone" color="white" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Phone</h4>
                  <a href="tel:+2340000000000" class="contact-value">+234 000 000 0000</a>
                </div>
              </div>
              
              <h4 class="details-subheading mb-4">Business Hours</h4>
              <p class="hours-text mb-2">Mondays — Saturdays: 8:00am — 6:00pm</p>
              <p class="hours-text mb-6">Sunday: Closed</p>
              
              <h4 class="details-subheading mb-4">Follow Us</h4>
              <div class="social-icons">
                <v-btn
                  icon
                  variant="outlined"
                  size="large"
                  class="social-btn"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  size="large"
                  class="social-btn"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  size="large"
                  class="social-btn"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  size="large"
                  class="social-btn"
                  href="https://youtube.com"
                  target="_blank"
                >
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Why Contact MWE -->
    <section class="why-contact-section py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <h2 class="section-title text-center mb-6">Why Contact MWE</h2>
            <p class="why-text text-center">
              At MWE, every enquiry receives our full attention. Every message is read, considered, and responded 
              to by a member of our team who understands your specific needs and is ready to help you find the 
              right solution.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Alternative CTA -->
    <section class="alt-cta-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="alt-cta-title mb-4">Not ready to reach out yet?</h2>
            <p class="alt-cta-text mb-6">
              Explore our services and discover how MWE can transform your organization, institution, or learning journey.
            </p>
            <v-btn
              color="#d9202a"
              size="x-large"
              to="/services"
            >
              Explore Our Services
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="5000"
      top
    >
      {{ snackbarMessage }}
      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  organization: '',
  email: '',
  phone: '',
  category: '',
  service: '',
  message: '',
});

const categories = [
  'School / Academic Institution',
  'Corporate Organisation / Professional Body',
  'Industry Player',
  'Individual Learner / Parent / Teacher',
  'Other',
];

const services = [
  'Mathematics Education & Academic Support',
  'Digital Solutions & Innovations',
  'Data Analytics & Quantitative Solutions',
  'General Enquiry',
];

const loading = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const submitForm = async () => {
  loading.value = true;
  
  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      snackbarMessage.value = data.message;
      snackbarColor.value = 'success';
      snackbar.value = true;
      
      // Reset form
      form.value = {
        name: '',
        organization: '',
        email: '',
        phone: '',
        category: '',
        service: '',
        message: '',
      };
    } else {
      snackbarMessage.value = data.error || 'Failed to send message. Please try again.';
      snackbarColor.value = 'error';
      snackbar.value = true;
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    snackbarMessage.value = 'Network error. Please check your connection and try again.';
    snackbarColor.value = 'error';
    snackbar.value = true;
  } finally {
    loading.value = false;
  }
};
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

.intro-section {
  background-color: rgb(var(--v-theme-surface));
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgb(var(--v-theme-on-surface));
  text-align: center;
}

.contact-section {
  background-color: rgb(var(--v-theme-surface-variant));
}

.contact-form-card {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
}

.contact-form-card .section-heading {
  color: white !important;
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.contact-details-card {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%) !important;
  height: 100%;
}

.details-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.details-subheading {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-label {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
}

.contact-value {
  font-size: 1rem;
  color: #b8c5d6;
  text-decoration: none;
  display: block;
}

.contact-value:hover {
  color: white;
}

.hours-text {
  font-size: 1rem;
  color: #b8c5d6;
  margin-bottom: 0;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-btn {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: white;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
}

.why-contact-section {
  background-color: rgb(var(--v-theme-surface));
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.why-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgb(var(--v-theme-on-surface));
}

.alt-cta-section {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%);
  color: white;
}

.alt-cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.alt-cta-text {
  font-size: 1.125rem;
  color: #b8c5d6;
}

/* Form field styling */
:deep(.v-field) {
  background-color: white !important;
}

:deep(.v-field__overlay) {
  background-color: white !important;
}

:deep(.v-field__outline) {
  color: rgba(0, 0, 0, 0.25);
}

:deep(.v-field--focused .v-field__outline) {
  color: #d9202a;
}

:deep(.v-text-field input),
:deep(.v-textarea textarea),
:deep(.v-select input),
:deep(.v-select .v-field__input) {
  color: #333 !important;
}

:deep(.v-label) {
  display: none !important;
}

:deep(.v-select .v-select__selection) {
  color: white !important;
}

:deep(.v-select .v-select__selection) {
  color: #333 !important;
}

:deep(.v-list-item) {
  color: #333 !important;
}

:deep(.v-select .v-field__input) {
  color: white !important;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
  
  .section-heading {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .alt-cta-title {
    font-size: 1.5rem;
  }
}
</style>
