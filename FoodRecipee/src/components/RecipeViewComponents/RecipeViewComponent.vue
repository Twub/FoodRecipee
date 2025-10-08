<template>
    <div class="recipe-view-comp">
      <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-view-item">
        <div class="card border-success mb-3 recItem">
          
          <div class="card-header bg-success">{{recipe.name}}</div>
          <div class="container">
            <div class="side">
              <img :src="recipe.image" class="d-block user-select-none imgRecipe">
            </div>
            <div class="card-body main">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
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
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
}

.bg-success {
  font-weight: bold;
  font-size: larger;
  color: white;
}

.container {  
  display: flex;
  flex-wrap: wrap;
  padding-left: 0%;
  padding-right: 0%;
}

/* Sidebar/left column */
.side {
  flex: 15%;
  background-color: #f1f1f1;
}

/* Main column */
.main {
  flex: 85%;
  background-color: white;
}

.imgRecipe {
  width: 100%;
}


</style>
  <!-- <img :src="recipe.image" class="d-block user-select-none" width="100%" height="270"> -->