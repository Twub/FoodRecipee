<template>
    <div class="recipe-view-comp">
      <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-view-item">
        
      </li>
    </div>
  </template>

<script setup>
  import { onMounted } from 'vue'
  import { useRecipeStore } from '../../stores/recipeStore'
  
  const store = useRecipeStore()
    onMounted(() => {
      store.fetchRecipes()
  })
</script>
  
<style scoped>
  
</style>
  