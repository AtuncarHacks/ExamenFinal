new Vue({
    el: '#app',
    data: {
      ingredients: ['Tomato', 'Cheese', 'Basil', 'Olive Oil', 'Chicken', 'Garlic'],
      selectedIngredients: [],
      recipe: null,
      noResults: false,
      defaultImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Gdz7DLRngoz11_YFMc4PeHs9VvZIL-HUJg&s',
    },
    methods: {
      fetchRecipe() {
        // Simulación de llamada a una API con un JSON local
        const recipes = [
          {
            name: 'Tomato Basil Salad',
            ingredients: ['Tomato', 'Basil', 'Olive Oil'],
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheese_platter.jpg/350px-Cheese_platter.jpg',
            description: 'A simple and fresh tomato basil salad.'
          },
          {
            name: 'Chicken Garlic',
            ingredients: ['Chicken', 'Garlic', 'Olive Oil'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dk5mDJHK-Kxh2RwrmXyJu9FAS7XcsSGnSoDxQyYP4jdtpwJiAua2rBgBKTAPejmTcAY&usqp=CAU',
            description: 'Delicious chicken cooked with garlic and olive oil.'
          }
        ];
  
        const selectedSet = new Set(this.selectedIngredients);
        this.recipe = recipes.find(recipe =>
          recipe.ingredients.every(ingredient => selectedSet.has(ingredient))
        );
  
        if (this.recipe) {
          this.noResults = false;
        } else {
          this.noResults = true;
        }
      }
    }
  });
  