<template>
    <div class="recipe-view-comp">
      <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-view-item">
        <div class="card border-primary mb-3" style="max-width: 20rem;">
          <div class="card-header bg-success">{{recipe.name}}</div>
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>      
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
.recipe-view-comp {
  margin-top: 5%;
}

.recipe-view-item {
  width: 80% !important;
}

.bg-success {
  font-weight: bold;
  font-size: larger;
  color: white;
}


</style>
  