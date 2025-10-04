<template>
  <div class="homePageRecipe">
    <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-item">
      <div class="card mb-3">
        <h3 class="card-header">{{ recipe.name }}</h3>
        <img :src="recipe.image" class="d-block user-select-none" width="100%" height="270">
        <div class="card-body">
          <h4>Ingredienser</h4>
          <ul class="list-group list-group-flush">
            <li v-for="ing in recipe.Ingredienser" :key="ing.id" class="list-group-item">
            {{ ing }}
            </li>
        </ul>
        </div>
        <div class="card-footer text-muted">
          2 days ago
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

li{
  list-style-type: none;
}

.recipe-item {
  width: 100%;
}

.homePageRecipe {
  width: 100%;
  left: 10px;
}

  @media (min-width: 1024px) {
    .homePageRecipe {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
