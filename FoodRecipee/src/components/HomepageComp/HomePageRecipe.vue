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
    <AnalogClock class="analog-clock-home"></AnalogClock>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useRecipeStore } from '../../stores/recipeStore'
    import AnalogClock from '../Clock/Analog/AnalogClock.vue'
    const store = useRecipeStore()

    onMounted(() => {
        store.fetchRecipes()
    })

</script>
  
<style scoped>
.analog-clock-home {
  width: 17%;
  margin-left: auto;
  margin-right: auto;
}

.recipe-item {
  width: 23%;
  max-width: 23%;
  height: 100%;
  min-width: 20%;
  margin-left: 2%;
  display: inline-block;
}

.homePageRecipe {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  box-shadow: 4px 4px rgba(0, 0, 0, 0.6);
}
</style>
