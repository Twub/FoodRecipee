<template>
    <div class="recipe-view-comp">
      <li v-for="recipe in store.recipes" :key="recipe.id" class="recipe-view-item">
        <div class="card border-success mb-3 recItem">
          <!-- TITLE -->
          <div class="card-header bg-success">{{recipe.name}}</div>
          <!-- TITLE END -->
          <div class="container">
            <div class="side">
              <img :src="recipe.image" class="d-block user-select-none imgRecipe">
            </div>
            <div class="card-body main">
              
              <div class="container2">
                
                <div class="side2">
                  <h4 class="card-title">Ingredienser:</h4>
                  
                </div>
                <div class="main2">
                  <li v-for="ingrediens in getVisibleIngredienser(recipe, false)" :key="ingrediens" class="firstListIngrediens">
                    <p class="card-text">{{ ingrediens }}</p>
                  </li>
                </div>
                <div class="main3">
                  <li v-for="ingrediens in getVisibleIngredienser(recipe, true)" :key="ingrediens">
                    <p class="card-text">{{ ingrediens }}</p>
                  </li>
                </div>
              </div>


              
              
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

  // CONTENT MAKER
  
  let getVisibleIngredienser = (recipe, secondList) => {
    let ingredienser = recipe.Ingredienser
    let ingredienserToShow = []
    let numberOfVisibleIngredienser = 3
    if (!secondList){
      for (let i = 0; i <= numberOfVisibleIngredienser; i++){
        ingredienserToShow.push(ingredienser[i])
      }
    
    }else {
      for (let i = 3; i < 7; i++){
        if (ingredienser[i] != null || ingredienser[i] != ''){
          ingredienserToShow.push(ingredienser[i])
        }
        
        console.log(ingredienser)
      }
    }
    
    return ingredienserToShow
  }

  


  // CONTENT MAKER END

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

.container2 {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0%;
  padding-right: 0%;
  margin-left: 0%;
  margin-right: 0%;
}

.side2 {
  flex: 20%;
  background-color: white;
}

.main2 {
  flex: 40%;
  background-color: white;
}

.main3 {
  flex: 40%;
  background-color: white;
}

.firstListIngrediens {
  margin-left: 10%;
}

</style>
  <!-- <img :src="recipe.image" class="d-block user-select-none" width="100%" height="270"> -->