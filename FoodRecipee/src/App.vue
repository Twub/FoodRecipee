<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderV2 from './components/HeaderMenu/HeaderV2.vue'
</script>

<template>
  <HeaderV2></HeaderV2>
  <!-- CONTENT -->

  <RouterView class="container" />
</template>

<style>
  body {
    min-height: 100%;
    background-image: url("./src/assets/images/mockup-photos-5nUNdLueQio-unsplash.jpg") !important;
    background-repeat: no-repeat;        
    background-size: cover;
  }
</style>
