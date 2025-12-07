<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
]

function setLanguage(lang: string) {
  locale.value = lang
}
console.log('locale now:', locale.value)
const RSVP_FORM_EMBED_URL = 'https://forms.gle/mLLFahRTtnUHasW69'
const flowerImage = "/images/flower.png"
</script>

<template>
  <!-- Hero Section -->
  <div class="text-box">
    <img src="/images/Sandra&Alfonso.png" alt="Sandra & Alfonso" style="height: 8em; width: auto;"
      class="logo-image" />
    <div class="text-box-content">
      <h1 class="hero-subtitle">{{ $t('hero.subtitle') }}</h1>
      <p class="hero-meta">{{ $t('hero.meta') }}</p>
    </div>
  </div>

  <header class="hero-header">
    <img src="/images/saal.jpg" alt="Sandra & Alfonso at their wedding venue" />
  </header>

  <!-- Navigation -->
  <nav class="main-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-links">
      <a href="#lovestory">{{ $t('nav.lovestory') }}</a>
      <a href="#celebration">{{ $t('nav.celebration') }}</a>
      <a href="#language">{{ $t('nav.language') }}</a>
      <a href="#speeches">{{ $t('nav.speeches') }}</a>
      <a href="#dresscode">{{ $t('nav.dresscode') }}</a>
      <a href="#gifts">{{ $t('nav.gifts') }}</a>
      <a href="#cocreate">{{ $t('nav.cocreate') }}</a>
      <a href="#familyspace">{{ $t('nav.familyspace') }}</a>
      <a href="#afterglow">{{ $t('nav.afterglow') }}</a>
      <a href="#rsvp">{{ $t('nav.rsvp') }}</a>
    </div>

    <div class="lang-buttons" role="group" aria-label="Language selection">
      <button v-for="lang in languages" :key="lang.code" :class="{ active: locale === lang.code }"
        :aria-pressed="locale === lang.code" @click="setLanguage(lang.code)">
        {{ lang.label }}
      </button>
    </div>
  </nav>

  <main class="info-text">
    <!-- Love Story Section -->
    <section id="lovestory" class="intro-section">
      <div class="section-content centered flower-arc">
        <!-- Vänster sida -->
        <img :src="flowerImage" alt="" class="flower-arc-item f1" />
        <img :src="flowerImage" alt="" class="flower-arc-item f2" />
        <img :src="flowerImage" alt="" class="flower-arc-item f3" />
        <img :src="flowerImage" alt="" class="flower-arc-item f4" />

        <!-- Text -->
        <div class="text-wrapper">
          <h2>{{ $t('lovestory.title') }}</h2>
          <p class="large-text">{{ $t('lovestory.text') }}</p>
        </div>

        <!-- Höger sida -->
        <img :src="flowerImage" alt="" class="flower-arc-item f5" />
        <img :src="flowerImage" alt="" class="flower-arc-item f6" />
        <img :src="flowerImage" alt="" class="flower-arc-item f7" />
        <img :src="flowerImage" alt="" class="flower-arc-item f8" />
      </div>
    </section>

    <!-- 1. Celebration - BILD VÄNSTER, TEXT HÖGER -->
    <section id="celebration" class="alternating-section">
      <div class="section-image">
        <img src="/images/vigselPlatsTwo.jpg" alt="The beautiful greenhouse venue at Backagården Café"
          class="img-medium" loading="lazy" />
      </div>
      <div class="section-text">
        <h2>{{ $t('celebration.title') }}</h2>
        <div class="celebration-text" v-html="$t('celebration.text')"></div>
      </div>
    </section>

    <!-- 2. Language - TEXT VÄNSTER, BILD HÖGER -->
    <section id="language" class="alternating-section reverse">
      <div class="section-text">
        <h2>{{ $t('language.title') }}</h2>
        <p>{{ $t('language.text') }}</p>
      </div>
      <div class="section-image">
        <img src="/images/goodToKnow.jpg" alt="Wedding ceremony details" class="img-large" loading="lazy" />
      </div>
    </section>

    <!-- 3. Speeches - BILD VÄNSTER, TEXT HÖGER -->
    <section id="speeches" class="alternating-section">
      <div class="section-image">
        <img src="/images/speaches4.jpg" alt="Wedding speeches during dinner" class="img-medium"
          loading="lazy" />
      </div>
      <div class="section-text">
        <h2>{{ $t('speeches.title') }}</h2>
        <p>{{ $t('speeches.text') }}</p>
      </div>
    </section>

    <!-- 4. Dresscode - TEXT VÄNSTER, BILD HÖGER -->
    <section id="dresscode" class="alternating-section reverse">
      <div class="section-text">
        <h2>{{ $t('dresscode.title') }}</h2>
        <p class="theme-highlight">{{ $t('dresscode.theme') }}</p>
        <p>{{ $t('dresscode.text') }}</p>
      </div>
      <div class="section-image">
        <img src="/images/bohemian.jpg" alt="Bohemian countryside chic wedding attire" class="img-medium"
          loading="lazy" />
      </div>
    </section>

    <!-- 5. Gifts - BILD VÄNSTER, TEXT HÖGER -->
    <section id="gifts" class="alternating-section">
      <div class="section-image">
        <img src="/images/gifts.jpg" alt="Wedding gifts" class="img-medium" loading="lazy" />
      </div>
      <div class="section-text">
        <h2>{{ $t('gifts.title') }}</h2>
        <p>{{ $t('gifts.text') }}</p>
      </div>
    </section>

    <!-- 6. Co-create - TEXT VÄNSTER, BILD HÖGER -->
    <section id="cocreate" class="alternating-section reverse">
      <div class="section-text">
        <h2>{{ $t('cocreate.title') }}</h2>
        <p>{{ $t('cocreate.text') }}</p>
      </div>
      <div class="section-image">
        <img src="/images/cocreate.jpg" alt="Co-create the celebration together" class="img-large"
          loading="lazy" />
      </div>
    </section>

    <!-- 7. Family Space - BILD VÄNSTER, TEXT HÖGER -->
    <section id="familyspace" class="alternating-section">
      <div class="section-image">
        <img src="/images/familytree.jpg" alt="Children welcome at the wedding" class="img-small"
          loading="lazy" />
      </div>
      <div class="section-text">
        <h2>{{ $t('familyspace.title') }}</h2>
        <p>{{ $t('familyspace.text') }}</p>
      </div>
    </section>

    <!-- 8. Afterglow - TEXT VÄNSTER, BILD HÖGER -->
    <section id="afterglow" class="alternating-section reverse">
      <div class="section-text">
        <h2>{{ $t('afterglow.title') }}</h2>
        <p>{{ $t('afterglow.text') }}</p>
      </div>
      <div class="section-image">
        <img src="/images/gardenhangout.jpg" alt="Weekend afterglow hangout" class="img-medium"
          loading="lazy" />
      </div>
    </section>

    <!-- Closing Words Section -->
    <section class="closing-section flower-arc">
  <!-- Vänster sida -->
  <img src="/images/flower.png" alt="" class="flower-arc-item f1" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f2" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f3" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f4" />

  <!-- Text -->
  <div class="text-wrapper">
    <p class="closing-text">{{ $t('closingwords.text') }}</p>
    <p class="closing-message">{{ $t('closingwords.closing') }}</p>
    <p class="signature">{{ $t('closingwords.signature') }}</p>
  </div>

  <!-- Höger sida -->
  <img src="/images/flower.png" alt="" class="flower-arc-item f5" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f6" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f7" />
  <img src="/images/flower.png" alt="" class="flower-arc-item f8" />
</section>

  </main>

  <!-- RSVP Section -->
  <section id="rsvp" class="rsvp-section">
    <div class="rsvp-container">
      <h2>{{ $t('rsvp.title') }}</h2>
      <p class="rsvp-intro">{{ $t('rsvp.intro') }}</p>

      <div class="form-container">
        <iframe :src="RSVP_FORM_EMBED_URL" width="100%" height="1400" frameborder="0" marginheight="0" marginwidth="0"
          title="RSVP Form" loading="lazy">
          {{ $t('rsvp.loading') }}
        </iframe>
      </div>
    </div>
  </section>
</template>

<style src="../assets/style.css"></style>

<style scoped>
.celebration-text :deep(ul) {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

.celebration-text :deep(li) {
  list-style: none;
}

.celebration-text :deep(li::marker) {
  display: none;
}

.flower-arc {
  position: relative;
  padding: 4rem 2rem;
}

.text-wrapper {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}

.flower-arc-item {
  position: absolute;
  width: 45px;
  height: auto;
  opacity: 0.35;
  pointer-events: none;
}

/* VÄNSTER BÅGE */
.f1 {
  top: 5%;
  left: 10%;
  transform: rotate(-30deg);
  width: 40px;
}

.f2 {
  top: 25%;
  left: 3%;
  transform: rotate(-15deg);
  width: 50px;
}

.f3 {
  top: 50%;
  left: 5%;
  transform: rotate(-5deg);
  width: 48px;
}

.f4 {
  top: 75%;
  left: 12%;
  transform: rotate(-20deg);
  width: 42px;
}

/* HÖGER BÅGE */
.f5 {
  top: 15%;
  right: 8%;
  transform: rotate(35deg);
  width: 38px;
}

.f6 {
  top: 35%;
  right: 2%;
  transform: rotate(20deg);
  width: 52px;
}

.f7 {
  top: 60%;
  right: 6%;
  transform: rotate(10deg);
  width: 46px;
}

.f8 {
  top: 80%;
  right: 15%;
  transform: rotate(25deg);
  width: 40px;
}

@media (max-width: 768px) {
  .f2,
  .f3,
  .f6,
  .f7 {
    display: none;
  }

  .flower-arc-item {
    width: 35px !important;
  }
}
</style>
