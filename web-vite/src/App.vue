<template>
  <div id="app">
    <HeaderSection />
    <HeroSection />
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #f9fafb;
}
#app {
  text-align: center;
}
</style>
