import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[]=[
    {
    id:"r1",
    title:"Spaghetti alla Carbonara",
    imageUrl: "https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ",
    ingredients:["Spaghetti", "Uova", "Guanciale", "Pecorino", "Pepe Nero"]
    },
    {
      id:"r2",
      title:"Rigatoni al Ragu",
      imageUrl: "https://www.charmenapoli.it/wp-content/uploads/2015/09/628x471.jpg",
      ingredients:["Rigatoni", "Ragu", "Formaggio"]
      }
  ];

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
