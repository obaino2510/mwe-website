<template>
  <v-container fluid class="pa-0">
    <section class="page-header">
      <v-container>
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">Get in touch with our team</p>
      </v-container>
    </section>

    <section class="contact-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="mb-8">
            <h2 class="section-heading mb-6">Send us a message</h2>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                class="mb-4"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Email Address"
                type="email"
                variant="outlined"
                class="mb-4"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                label="Phone Number"
                variant="outlined"
                class="mb-4"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="Your Message"
                variant="outlined"
                rows="6"
                class="mb-4"
                required
              ></v-textarea>
              <v-btn
                type="submit"
                color="#d9202a"
                size="large"
                block
                :loading="loading"
                :disabled="loading"
              >
                {{ loading ? 'Sending...' : 'Send Message' }}
              </v-btn>
            </v-form>
          </v-col>

          <v-col cols="12" md="6">
            <h2 class="section-heading mb-6">Contact Information</h2>
            <v-card elevation="2" class="pa-6 mb-4">
              <div class="contact-item mb-6">
                <v-icon icon="mdi-email" color="#d9202a" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Email</h4>
                  <a href="mailto:info@mwe.com.ng" class="contact-value">info@mwe.com.ng</a>
                </div>
              </div>
              <div class="contact-item mb-6">
                <v-icon icon="mdi-phone" color="#d9202a" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Phone</h4>
                  <a href="tel:+2340000000000" class="contact-value">+234 000 000 0000</a>
                </div>
              </div>
              <div class="contact-item mb-6">
                <v-icon icon="mdi-clock-outline" color="#d9202a" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Business Hours</h4>
                  <p class="contact-value mb-0">Mon – Sat : 8:00am – 6:00pm</p>
                </div>
              </div>
              <div class="contact-item">
                <v-icon icon="mdi-map-marker" color="#d9202a" size="32" class="mr-4"></v-icon>
                <div>
                  <h4 class="contact-label">Location</h4>
                  <p class="contact-value mb-0">Lagos & Awka, Nigeria</p>
                </div>
              </div>
            </v-card>
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
  email: '',
  phone: '',
  message: '',
});

const loading = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const submitForm = async () => {
  loading.value = true;
  
  try {
    // Use Netlify Function endpoint
    // In development: /.netlify/functions/contact
    // In production: /.netlify/functions/contact (same path)
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
        email: '',
        phone: '',
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

.contact-section {
  background-color: #f5f5f5;
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-label {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.contact-value {
  font-size: 1rem;
  color: #666;
  text-decoration: none;
}

.contact-value:hover {
  color: #d9202a;
}

/* Form field styling */
:deep(.v-field) {
  background-color: white !important;
}

:deep(.v-field__outline) {
  color: rgba(0, 0, 0, 0.25);
}

:deep(.v-field--focused .v-field__outline) {
  color: #d9202a;
}

:deep(.v-text-field input),
:deep(.v-textarea textarea) {
  color: #333 !important;
}

:deep(.v-label) {
  color: #666 !important;
}

@media (max-width: 960px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
