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

</style>
