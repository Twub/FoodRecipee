<template>
    <ul class="recipe-list">
        <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-item">
            {{ recipe.Namn }}
        </li>
    </ul>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'

const store = useRecipeStore()

onMounted(() => {
    store.fetchRecipes()
})


</script>