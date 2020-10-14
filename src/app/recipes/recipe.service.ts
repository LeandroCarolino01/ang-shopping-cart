import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test',
    'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
    [
      new Ingredient('Meat', 1),
      new Ingredient('french Fries', 20)
    ]
     ),

    new Recipe(
      'Another test',
      'This is simply a test',
       'https://www.curiouscuisiniere.com/wp-content/uploads/2019/04/Brazilian-Feijoada-Black-Bean-Stew.450.jpg',
       [
        new Ingredient('buns', 1),
        new Ingredient('chicken', 24)
       ]
       )
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
