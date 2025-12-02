<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['enter'])
const isAnimating = ref(false)

function handleFlowerClick() {
  isAnimating.value = true
  setTimeout(() => {
    emit('enter')
  }, 2000)
}
</script>

<template>
  <div class="landing-page" :class="{ 'fade-out': isAnimating }">
    <div class="flower-container" @click="handleFlowerClick">
      
      <!-- Huvudblomma i mitten -->
      <div class="main-flower-wrapper">
        <img 
          src="../../public/images/flower.png" 
          alt="Klicka för att öppna inbjudan"
          class="landing-flower main-flower"
          :class="{ 'explode': isAnimating }"
        />

        <!-- Explosionsblommor - alla startar från samma punkt -->
        <div v-if="isAnimating" class="explosion-flowers">
          <img src="../../public/images/flower.png" class="explosion-flower flower-1" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-2" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-3" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-4" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-5" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-6" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-7" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-8" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-9" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-10" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-11" />
          <img src="../../public/images/flower.png" class="explosion-flower flower-12" />
        </div>
      </div>

      <!-- Brudparets namn -->
      <div class="names-container">
        <img 
          src="../../public/images/Sandra&Alfonso.png" 
          alt="Sandra & Alfonso"
          class="couple-names"
          :class="{ 'fade-in': !isAnimating }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(224, 221, 213);
  /* background: rgb(197, 194, 184); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 1s ease-out;
  overflow: hidden;
}

.landing-page.fade-out {
  opacity: 0;
  pointer-events: none;
}

.flower-container {
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.flower-container:hover .main-flower {
  transform: scale(1.1) rotate(5deg);
}

.main-flower-wrapper {
  position: relative;
  display: inline-block;
}

.landing-flower {
  width: 250px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  transition: all 0.6s ease;
  display: block;
}

.main-flower {
  animation: gentle-float 3s ease-in-out infinite;
}

.main-flower.explode {
  animation: explode-center 2s ease-out forwards;
}

/* Explosionsblommor - alla startar från EXAKT samma punkt */
.explosion-flowers {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  pointer-events: none;
}

.explosion-flower {
  position: absolute;
  width: 80px;
  height: auto;
  /* Alla startar från exakt samma punkt (0,0) */
  top: -40px;
  left: -40px;
  opacity: 0;
}

/* Varje blomma exploderar åt slumpmässiga håll med lite tilt */
.flower-1 {
  animation: explode-1 1.6s ease-out forwards;
}

.flower-2 {
  animation: explode-2 1.5s ease-out forwards;
}

.flower-3 {
  animation: explode-3 1.7s ease-out forwards;
}

.flower-4 {
  animation: explode-4 1.4s ease-out forwards;
}

.flower-5 {
  animation: explode-5 1.6s ease-out forwards;
}

.flower-6 {
  animation: explode-6 1.5s ease-out forwards;
}

.flower-7 {
  animation: explode-7 1.7s ease-out forwards;
}

.flower-8 {
  animation: explode-8 1.5s ease-out forwards;
}

.flower-9 {
  animation: explode-9 1.6s ease-out forwards;
}

.flower-10 {
  animation: explode-10 1.4s ease-out forwards;
}

.flower-11 {
  animation: explode-11 1.7s ease-out forwards;
}

.flower-12 {
  animation: explode-12 1.5s ease-out forwards;
}

/* Brudparets namn */
.names-container {
  margin-top: 30px;
}

.couple-names {
  width: 300px;
  height: auto;
  opacity: 0;
  animation: fade-in-names 2s ease-in forwards;
}

.couple-names.fade-in {
  animation: pulse 2s ease-in-out infinite;
}

/* Animeringar */
@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes explode-center {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.3) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* Explosioner - alla från centrum med olika riktningar och rotation (20% tilt) */
@keyframes explode-1 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-280px, -320px) scale(1.3) rotate(340deg);
    opacity: 0;
  }
}

@keyframes explode-2 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-100px, -380px) scale(1.1) rotate(-380deg);
    opacity: 0;
  }
}

@keyframes explode-3 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(120px, -360px) scale(1.2) rotate(400deg);
    opacity: 0;
  }
}

@keyframes explode-4 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(310px, -290px) scale(1.4) rotate(-420deg);
    opacity: 0;
  }
}

@keyframes explode-5 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(370px, -80px) scale(1.2) rotate(370deg);
    opacity: 0;
  }
}

@keyframes explode-6 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(340px, 100px) scale(1.1) rotate(-350deg);
    opacity: 0;
  }
}

@keyframes explode-7 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(200px, 280px) scale(1.3) rotate(410deg);
    opacity: 0;
  }
}

@keyframes explode-8 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(50px, 350px) scale(1.2) rotate(-390deg);
    opacity: 0;
  }
}

@keyframes explode-9 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-150px, 330px) scale(1.1) rotate(360deg);
    opacity: 0;
  }
}

@keyframes explode-10 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-320px, 220px) scale(1.4) rotate(-400deg);
    opacity: 0;
  }
}

@keyframes explode-11 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-380px, 50px) scale(1.2) rotate(380deg);
    opacity: 0;
  }
}

@keyframes explode-12 {
  0% {
    transform: translate(0, 0) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-350px, -150px) scale(1.3) rotate(-370deg);
    opacity: 0;
  }
}

@keyframes fade-in-names {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .landing-flower {
    width: 180px;
  }
  
  .couple-names {
    width: 200px;
  }

  .explosion-flower {
    width: 60px;
    top: -30px;
    left: -30px;
  }

  /* Mindre explosionsavstånd på mobil */
  @keyframes explode-1 { 100% { transform: translate(-180px, -220px) scale(1.1) rotate(340deg); opacity: 0; } }
  @keyframes explode-2 { 100% { transform: translate(-60px, -260px) scale(0.9) rotate(-380deg); opacity: 0; } }
  @keyframes explode-3 { 100% { transform: translate(80px, -240px) scale(1) rotate(400deg); opacity: 0; } }
  @keyframes explode-4 { 100% { transform: translate(210px, -190px) scale(1.2) rotate(-420deg); opacity: 0; } }
  @keyframes explode-5 { 100% { transform: translate(250px, -50px) scale(1) rotate(370deg); opacity: 0; } }
  @keyframes explode-6 { 100% { transform: translate(230px, 70px) scale(0.9) rotate(-350deg); opacity: 0; } }
  @keyframes explode-7 { 100% { transform: translate(130px, 190px) scale(1.1) rotate(410deg); opacity: 0; } }
  @keyframes explode-8 { 100% { transform: translate(30px, 240px) scale(1) rotate(-390deg); opacity: 0; } }
  @keyframes explode-9 { 100% { transform: translate(-100px, 220px) scale(0.9) rotate(360deg); opacity: 0; } }
  @keyframes explode-10 { 100% { transform: translate(-220px, 150px) scale(1.2) rotate(-400deg); opacity: 0; } }
  @keyframes explode-11 { 100% { transform: translate(-260px, 30px) scale(1) rotate(380deg); opacity: 0; } }
  @keyframes explode-12 { 100% { transform: translate(-240px, -100px) scale(1.1) rotate(-370deg); opacity: 0; } }
}
</style>
