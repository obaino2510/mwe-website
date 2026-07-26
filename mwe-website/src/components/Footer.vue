<template>
  <v-footer class="footer-container">
    <v-container fluid>
      <!-- Main Footer Content -->
      <v-row class="footer-content py-12">
        <!-- Company Info Section -->
        <v-col cols="12" md="4" class="footer-section">
          <div class="company-info">
            <router-link to="/" class="footer-logo-link">
              <v-img
                src="/logo-4a.png"
                alt="MWE Logo"
                max-width="120"
                class="mb-4"
              />
            </router-link>
            <p class="company-description">
              A math-driven strategy and solutions company delivering expert education, full-scale data analytics, and intelligent digital solutions across every industry.
            </p>
            
            <!-- Social Media Icons -->
            <div class="social-icons mt-6">
              <v-btn
                icon
                variant="outlined"
                size="small"
                class="social-btn"
                href="https://linkedin.com"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="outlined"
                size="small"
                class="social-btn"
                href="https://facebook.com"
                target="_blank"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="outlined"
                size="small"
                class="social-btn"
                href="https://instagram.com"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="outlined"
                size="small"
                class="social-btn"
                href="https://youtube.com"
                target="_blank"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <!-- Navigate Section -->
        <v-col cols="12" sm="6" md="2" class="footer-section">
          <h3 class="footer-heading">NAVIGATE</h3>
          <v-list class="footer-list" bg-color="transparent">
            <v-list-item
              v-for="link in navigateLinks"
              :key="link.title"
              :to="link.to"
              class="footer-link"
            >
              {{ link.title }}
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Services Section -->
        <v-col cols="12" sm="6" md="3" class="footer-section">
          <h3 class="footer-heading">SERVICES</h3>
          <v-list class="footer-list" bg-color="transparent">
            <v-list-item
              v-for="service in services"
              :key="service.title"
              :to="service.to"
              class="footer-link"
            >
              {{ service.title }}
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Get In Touch Section -->
        <v-col cols="12" md="3" class="footer-section">
          <h3 class="footer-heading">GET IN TOUCH</h3>
          <v-list class="footer-list contact-list" bg-color="transparent">
            <v-list-item class="footer-contact">
              <a href="mailto:info@mwe.com.ng" class="contact-link">
                info@mwe.com.ng
              </a>
            </v-list-item>
            <v-list-item class="footer-contact">
              <a href="tel:+2340000000000" class="contact-link">
                +234 000 000 0000
              </a>
            </v-list-item>
            <v-list-item class="footer-contact">
              <span class="contact-text">Mon – Sat : 8:00am – 6:00pm</span>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Footer Bottom -->
      <v-divider class="footer-divider"></v-divider>
      <v-row class="footer-bottom py-4">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <p class="footer-copyright mb-0">
            © 2026 Mathematics World of Excellence Ltd. All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <p class="footer-location mb-0">
            Founded 2017 · Lagos & Awka, Nigeria
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
const navigateLinks = [
  { title: 'Home', to: '/' },
  { title: 'About Us', to: '/about-us' },
  { title: 'Services', to: '/services' },
  { title: 'Who We Serve', to: '/who-we-serve' },
  { title: 'Contact Us', to: '/contact-us' },
];

const services = [
  { title: 'Mathematics Education', to: '/services/mathematics-education' },
  { title: 'Digital Solutions', to: '/services/digital-solutions' },
  { title: 'Data Analytics', to: '/services/data-analytics' },
];
</script>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #0a1929 0%, #1a2f4a 100%);
  color: #b8c5d6;
  padding: 0;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-section {
  padding: 0 24px;
}

.company-info {
  max-width: 300px;
}

.footer-logo-link {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  line-height: 0;
}

.footer-logo-link:hover {
  opacity: 0.8;
}

.company-description {
  font-size: 14px;
  line-height: 1.6;
  color: #8b98a8;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-btn {
  border-color: rgba(255, 255, 255, 0.2);
  color: #b8c5d6;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #b8c5d6;
  margin-bottom: 20px;
}

.footer-list {
  padding: 0;
}

.footer-list .v-list-item {
  padding: 8px 0;
  min-height: auto;
  color: #8b98a8;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-list .v-list-item:hover {
  color: #ffffff;
  background-color: transparent;
}

.footer-link {
  cursor: pointer;
}

.contact-list .v-list-item {
  padding: 12px 0;
}

.contact-link {
  color: #8b98a8;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;
}

.contact-link:hover {
  color: #ffffff;
}

.contact-text {
  color: #8b98a8;
  font-size: 14px;
}

.footer-divider {
  border-color: rgba(255, 255, 255, 0.1);
  margin: 20px 0;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-copyright,
.footer-location {
  font-size: 13px;
  color: #6b7884;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .footer-section {
    margin-bottom: 32px;
  }
  
  .company-info {
    max-width: 100%;
  }
  
  .text-md-left,
  .text-md-right {
    text-align: center !important;
  }
}
</style>
