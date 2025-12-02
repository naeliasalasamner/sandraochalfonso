<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const RSVP_FORM_EMBED_URL = 'https://forms.gle/mLLFahRTtnUHasW69'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

function setLanguage(lang: string) {
  locale.value = lang
}

</script>


<template>
  <div class="lang-buttons">
    <button v-for="lang in languages" :key="lang.code" :class="{ active: locale === lang.code }"
      @click="setLanguage(lang.code)">
      {{ lang.label }}
    </button>
  </div>

  <div class="text-box">
    <img src="../../public/images/Sandra&Alfonso.png" alt="Sandra & Alfonso" style="height: 8em; width: auto;" />
    <p>YOU'RE INVITED TO BE PART IN THE CELEBRATION OF OUR LOVE STORY</p>
    <p>Malmö – 12 juni 2026</p>
  </div>

  <header class="hero-header">
    <img src="../../public/images/saal.jpg" alt="Sandra & Alfonso" />
  </header>

  <nav>
    <a href="#celebration">{{ t('nav.celebration') }}</a>
    <a href="#familyspace">{{ t('nav.familyspace') }}</a>
    <a href="#language">{{ t('nav.language') }}</a>
    <a href="#dresscode">{{ t('nav.dresscode') }}</a>
    <a href="#gifts">{{ t('nav.gifts') }}</a>
    <a href="#cocreate">{{ t('nav.cocreate') }}</a>
    <a href="#RSVP">{{ t('nav.rsvp') }}</a>
  </nav>

  <div class="info-text">
    <section id="celebration" class="alternating-section">
      <div class="section-image left">
        <img src="../../public/images/vigselPlatsTwo.jpg" alt="Sandra & Alfonso" class="img-medium" />
      </div>
      <div class="section-text">
        <h2>{{ t('celebration.title') }}</h2>
        <p>{{ t('celebration.text') }}</p>
      </div>
    </section>

    <section id="familyspace" class="alternating-section">
      <div class="section-text">
        <h2>{{ t('familyspace.title') }}</h2>
        <p>{{ t('familyspace.text') }}</p>
      </div>
      <div class="section-image right">
        <img src="../../public/images/barn.jpg" alt="barn" class="img-small" />
      </div>
    </section>

    <section id="language" class="alternating-section">
      <div class="section-image left">
        <img src="../../public/images/goodToKnow.jpg" alt="Sandra & Alfonso" class="img-large" />
      </div>
      <div class="section-text">
        <h2>{{ t('language.title') }}</h2>
        <p>{{ t('language.text') }}</p>
      </div>
    </section>

    <section id="dresscode" class="alternating-section">
      <div class="section-text">
        <h2>{{ t('dresscode.title') }}</h2>
        <p>{{ t('dresscode.text') }}</p>
      </div>
      <div class="section-image right">
        <img src="../../public/images/dresscode.jpeg" alt="Sandra & Alfonso" class="img-small" />
      </div>
    </section>

    <!-- Section 5: Bild VÄNSTER, text höger -->
    <section id="gifts" class="alternating-section">
      <div class="section-image left">
        <img src="../../public/images/gifts.jpg" alt="Sandra & Alfonso" class="img-medium" />
      </div>
      <div class="section-text">
        <h2>{{ t('gifts.title') }}</h2>
        <p>{{ t('gifts.text') }}</p>
      </div>
    </section>

    <!-- Section 6: Text vänster, bild HÖGER -->
    <section id="cocreate" class="alternating-section">
      <div class="section-text">
        <h2>{{ t('cocreate.title') }}</h2>
        <p>{{ t('cocreate.text') }}</p>
      </div>
      <div class="section-image right">
        <img src="../../public/images/cocreate.jpg" alt="Sandra & Alfonso" class="img-large" />
      </div>
    </section>
  </div>

  <section id="RSVP" class="rsvp-section">
    <!-- <h2>{{ t('rsvp.title') }}</h2> -->
    <!-- <p class="rsvp-description">{{ t('rsvp.description') }}</p> -->
    
    <div class="form-container">
      <iframe 
        :src="RSVP_FORM_EMBED_URL"
        width="100%" 
        height="1400" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
      >
        Läser in formulär…
      </iframe>
    </div>
  </section>
</template>



<style src="../assets/style.css"></style>

<!-- <iframe :src="RSVP_FORM_EMBED_URL" 
        width="100%" 
        height="300" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        id="google-form">
</iframe> -->

<style>
#form-container {
    margin-bottom: 200px; 
    overflow: hidden;
    background: red;
}
</style>