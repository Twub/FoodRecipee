<template>
  <div class="homePageRecipe">
    <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-item">
      <div class="card mb-3">
        <h3 class="card-header">{{ recipe.name }}</h3>
        <img :src="recipe.image" class="d-block user-select-none" width="100%" height="270">
        <div class="card-footer text-muted">
          <button type="button" class="btn btn-success">Gå till Recept</button>
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
  
<style>

.recipe-item {
  width: 25%;
  max-width: 25%;
  min-width: 20%;
  margin-left: 2%;
  text-align:left;
  float:left;
  display:inline-block;
  
  list-style-type: none;
}

.homePageRecipe {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
}
</style>
