<script>
import { ref } from 'vue'
import { useFixedHeader } from 'vue-use-fixed-header'
import { RouterLink, RouterView } from 'vue-router'

const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)
</script>

<template>
    <header class="Header" ref="headerRef" :style="styles">
    <RouterLink to="/">Hem</RouterLink>
    <RouterLink to="/recipes">Recept</RouterLink>
    <RouterLink to="/loginPage">Logga in</RouterLink>
    <RouterLink to="/about">Om</RouterLink>
  </header>
</template>

<style scoped>
.Header {
  position: fixed; /* Keeps the header fixed at the top */
  left: 25%;
  right: 25%;
  top: 1%;
  border-radius: 25px;
  width: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #52c864;
  z-index: 1000; /* Ensure the header is above other content */
}
.Header a {
  color: white;
}
.content {
  margin-top: 120px; /* To prevent content from being hidden under the fixed header */
  padding: 1rem;
  height: 2000px; /* Or any other large value to create a scrollable area */
}
</style>