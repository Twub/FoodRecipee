import { defineStore } from "pinia";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useRecipeStore = defineStore('recipe', {
    state: () => ({
        recipes: []
    }),
    actions: {
        async fetchRecipes(){
            const querySnapshot = await getDocs(collection(db, 'recipes'));
            this.recipes = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            // sort ingredienser
            
        },
        async addRecipe(recipe) {
            await addDoc(collection(db, 'recipes'), recipe)
            this.fetchRecipes()
          },
          async deleteRecipe(id) {
            await deleteDoc(doc(db, 'recipes', id))
            this.fetchRecipes()
          },
          async updateRecipe(id, updated) {
            await updateDoc(doc(db, 'recipes', id), updated)
            this.fetchRecipes()
          }
    }
})