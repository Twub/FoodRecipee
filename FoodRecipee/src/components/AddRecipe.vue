<template>
    <form @submit.prevent="handleAdd" class="add-form">
        <input v-model="text" placeholder="Recipe Todo" class="input" />
        <button type="submit" class="button">Add</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'

const text = ref('')
const store = useRecipeStore()

function handleAdd() {
    if (text.value.trim()) {
        store.addRecipe({ text: text.value })
        text.value = ''
    }
}
</script>