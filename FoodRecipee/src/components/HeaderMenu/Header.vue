<script>
import { ref } from 'vue'
import { useFixedHeader } from 'vue-use-fixed-header'
import { RouterLink, RouterView } from 'vue-router'

const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)
</script>

<template>
    <header class="Header" ref="headerRef" :style="styles" >
    <RouterLink to="/" class="hover-underline">Hem</RouterLink>
    <RouterLink to="/recipes" class="hover-underline">Recept</RouterLink>
    <RouterLink to="/myPage" class="hover-underline">Min sida</RouterLink>
    <RouterLink to="/loginPage" class="hover-underline">Logga in</RouterLink>
    <RouterLink to="/about" class="hover-underline">Om</RouterLink>
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
.hover-underline {
  font-size: 1.3rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.hover-underline::after,
.hover-underline::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #408080, #00ffff);
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease-out;
}

.hover-underline::before {
  top: -5px;
  transform-origin: left;
}

.hover-underline:hover::after,
.hover-underline:hover::before {
  transform: scaleX(1);
}
</style>