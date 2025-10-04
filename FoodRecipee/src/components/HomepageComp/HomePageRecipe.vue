<template>
    <div class="homePageRecipe">
      
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
  
  <style>
  @media (min-width: 1024px) {
    .homePageRecipe {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
