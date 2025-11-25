<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'  

const { t, locale } = useI18n()     

const form = reactive({
  name: '',
  allergies: '',
  specialDiet: '',
  drink: '',
  busRide: '',
  musicWishes: ['', '', ''],
  sleepOver: '',
  deadline: ''
})

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'sv', label: 'SV' }
]

function setLanguage(lang: string) {
  locale.value = lang
}

</script>


<template>
  <div class="lang-buttons">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="{ active: locale === lang.code }"
      @click="setLanguage(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>

  <div class="text-box">
    <img src="../../public/images/Sandra&Alfonso.png" 
     alt="Sandra & Alfonso" 
     style="height: 8em; width: auto;" />
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
    <!-- Section 1: Bild VÄNSTER, text höger -->
    <section id="celebration" class="alternating-section">
      <div class="section-image left">
        <img src="../../public/images/vigselPlatsTwo.jpg" alt="Sandra & Alfonso" class="img-medium" />
      </div>
      <div class="section-text">
        <h2>{{ t('celebration.title') }}</h2>
        <p>{{ t('celebration.text') }}</p>
      </div>
    </section>

    <!-- Section 2: Text vänster, bild HÖGER -->
    <section id="familyspace" class="alternating-section">
      <div class="section-text">
        <h2>{{ t('familyspace.title') }}</h2>
        <p>{{ t('familyspace.text') }}</p>
      </div>
      <div class="section-image right">
        <img src="../../public/images/barn.jpg" alt="barn" class="img-small" />
      </div>
    </section>

    <!-- Section 3: Bild VÄNSTER, text höger -->
    <section id="language" class="alternating-section">
      <div class="section-image left">
        <img src="../../public/images/goodToKnow.jpg" alt="Sandra & Alfonso" class="img-large" />
      </div>
      <div class="section-text">
        <h2>{{ t('language.title') }}</h2>
        <p>{{ t('language.text') }}</p>
      </div>
    </section>
  
    <!-- Section 4: Text vänster, bild HÖGER -->
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
        <img src="../../public/images/gifts.jpg" alt="Sandra & Alfonso" class="img-large" />
      </div>
    </section>
  </div>
  
  <section id="RSVP">
    <h2>{{ t('rsvp.title') }}</h2>
    <form @submit.prevent="" class="osa-form">
      
      <label>
        {{ t('rsvp.form.name') }}
        <input v-model="form.name" type="text" required placeholder="Ditt namn" />
      </label>

      <label>
        {{ t('rsvp.form.allergies') }}
        <input v-model="form.allergies" type="text" placeholder="T.ex. nötter, gluten..." />
      </label>

      <label>
        {{ t('rsvp.form.specialDiet') }}
        <input v-model="form.specialDiet" type="text" placeholder="T.ex. vegetarisk, vegan..." />
      </label>

      <fieldset>
        <legend>{{ t('rsvp.form.drink') }}</legend>
        <label>
          <input type="radio" value="alcohol" v-model="form.drink" />
          {{ t('rsvp.form.drinkAlcohol') }}
        </label>
        <label>
          <input type="radio" value="alcoholFree" v-model="form.drink" />
          {{ t('rsvp.form.drinkAlcoholFree') }}
        </label>
      </fieldset>

      <fieldset>
        <legend>{{ t('rsvp.form.busRide') }}</legend>
        <label>
          <input type="radio" value="yes" v-model="form.busRide" />
          {{ t('rsvp.form.yes') }}
        </label>
        <label>
          <input type="radio" value="no" v-model="form.busRide" />
          {{ t('rsvp.form.no') }}
        </label>
      </fieldset>

      <label>
        {{ t('rsvp.form.musicWishes') }}
        <div class="music-wishes-container">
          <input 
            v-for="(song, index) in form.musicWishes" 
            :key="index"
            v-model="form.musicWishes[index]" 
            type="text" 
            :placeholder="`Låt ${index + 1}`" 
          />
        </div>
      </label>

      <fieldset>
        <legend>{{ t('rsvp.form.sleepOver') }}</legend>
        <label>
          <input type="radio" value="yes" v-model="form.sleepOver" />
          {{ t('rsvp.form.yes') }}
        </label>
        <label>
          <input type="radio" value="no" v-model="form.sleepOver" />
          {{ t('rsvp.form.no') }}
        </label>
        <label>
          <input type="radio" value="van" v-model="form.sleepOver" />
          {{ t('rsvp.form.van') }}
        </label>
      </fieldset>

      <label>
        {{ t('rsvp.form.deadline') }}
      </label>

      <button type="submit">{{ t('rsvp.form.submit') }}</button>
    </form>
  </section>
</template>

 

<style src="../assets/style.css">

</style>

