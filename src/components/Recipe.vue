<template>

  <div class="container">
    <div v-for="(recipe, index) in recipes" :key="index">

      <div class="recipe__list__item" style="order: 1; width: 523.333px;">
        <div class="recipe__list__item__inner">
          <div class="recipe__list__item__bg" :style="recipe.img"></div>
          <div class="recipe__list__item__wrapper">
            <div class="recipe__list__item__title" data-id="1">
              <div class="recipe__list__item__title__text">
                <h2>{{ recipe.name }}</h2>
              </div>
              <div class="recipe__list__item__title__buttons">
                <div class="recipe__list__item__title__buttons__edit">
                  <button type="button"
                          v-on:click="editRecipe(recipe)">Edit
                  </button>
                </div>
                <div class="recipe__list__item__title__buttons__remove">
                  <button type="button"
                          v-on:click="removeRecipe(index, recipe.id)">Remove
                  </button>
                </div>
              </div>
            </div>
            <div class="recipe__list__item__content">
              <p>{{ recipe.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="recipe__modal">
      <div class="container">
        <div class="recipe__modal__wrapper">
          <form class="form" @submit.prevent="addRecipe">
            <div class="form__content">
              <div class="form__content__img">
                <img src="img/empty.jpg"
                     alt="Recipe Img"
                     ref="form__content__img">
              </div>
              <div class="form__content__description">
                <div class="form__content__title"><h2></h2></div>
                <div class="form__content__description"><p></p></div>
                <div class="form__content__ingredients__title"><h3>Ingredients</h3></div>
                <div class="form__content__ingredients">
                  <ul></ul>
                </div>
              </div>
            </div>
            <div class="form__wrapper">
              <div class="form__input__img"><label>
                <span>Choose an image</span>
                <img src="img/empty.jpg"
                     alt="Choose image"
                     ref="form__input__img">
                <input id="img-recipe-add"
                       type="file"
                       name="image"
                       v-on:change="onFileChange"></label>
              </div>
              <div class="form__inputs">
                <div class="form__input">
                  <input name="name"
                         id="name-recipe-add"
                         type="text"
                         required
                         v-model="name">
                  <label for="name-recipe-add">Name</label>
                </div>
                <div class="form__input">
                  <textarea
                          id="description-recipe-add"
                          name="description"
                          required
                          v-model="description"></textarea>
                  <label for="description-recipe-add">Description</label>
                </div>
                <div class="ingredients">
                  <div class="form__input">
                    <input id="ingredient-add"
                           name="ingredients"
                           type="text"
                           v-model="ingredients">
                    <label for="ingredient-add">Add new ingredient</label>
                    <button class="ingredient__button ingredient-add"
                            type="button"
                            v-on:click="addIngredient">Add
                    </button>
                  </div>


                  <div class="ingredients__list" v-for="(ingredient, index) in ingredientsList" :key="index">

                    <div class="form__input ingredients__item">
                      <!--<label>-->
                      <input id="ingredient"
                             type="text"
                             v-model="ingredient.name"
                             :disabled="ingredient.editing">
                      <!--</label>-->
                      <div class="ingredient__add__button__wrapper">
                        <button class="ingredient__button ingredient__edit"
                                type="button"
                                v-if="ingredient.editing"
                                v-on:click="editIngredient(ingredient)">Edit
                        </button>
                        <button class="ingredient__button ingredient__edit"
                                type="button"
                                v-else
                                v-on:click="editIngredient(ingredient)">Save
                        </button>
                        <button class="ingredient__button ingredient__remove"
                                type="button"
                                v-on:click="removeIngredient(index)">Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="general__button recipe__add__button">
                <button type="submit">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Add recipe</div>
          <div class="card-body">
            <!--<div v-if="error" class="alert alert-danger">{{error}}</div>-->
            <form action="#" @submit.prevent="addRecipe">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                <div class="col-md-6">
                  <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          v-model="name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="description" class="col-md-4 col-form-label text-md-right">Description</label>
                <textarea
                        id="description"
                        name="description"
                        required
                        v-model="description"
                ></textarea>
              </div>
              <div class="form-group row">
                <label for="ingredients" class="col-md-4 col-form-label text-md-right">Ingredients</label>
                <input
                        id="ingredients"
                        name="description"
                        v-model="ingredients"
                />
              </div>
              <button type="button"
                      v-on:click="addIngredient" class="btn btn-primary">Add ingredient
              </button>

              <div v-for="(ingredient, index) in ingredientsList" :key="index">
                <input type="text"
                       v-model="ingredient.name"
                       :disabled="ingredient.editing">
                <button type="button"
                        v-if="ingredient.editing"
                        v-on:click="editIngredient(ingredient)">Edit
                </button>
                <button type="button"
                        v-else
                        v-on:click="editIngredient(ingredient)">Save
                </button>
                <button type="button"
                        v-on:click="removeIngredient(index)">Remove
                </button>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Create</button>
                </div>
              </div>
            </form>
          </div>

          <div class="card-header">Recipe list</div>

          <div class="card-body">
            <div v-for="(recipe, index) in recipes" :key="index">
              <h1>{{ recipe.name }}</h1>
              <article>{{ recipe.description }}</article>
              <div v-for="(ingredient, index) in recipe.ingredientsList" :key="index">

              </div>
              <button type="button"
                      v-on:click="editRecipe">Edit
              </button>
              <button type="button"
                      v-on:click="removeRecipe(index, recipe.id)">Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import db from '../../config/firebaseConfig'

  export default {
    data() {
      return {
        title: 'Add new recipe',
        recipes: [],
        name: '',
        img: '',
        description: '',
        ingredients: '',
        ingredientsList: [],
      };
    },
    mounted() {
      this.getAllRecipes()
    },
    methods: {

      modalToggle() {
        let body = document.querySelector('body');
        let modal = document.querySelector('.recipe__modal');
        if (body.classList.contains('modal_active')) {
          modal.classList.remove('recipe__view');
          modal.classList.remove('recipe__add');
          body.classList.remove('modal_active');
        } else {
          // modal.classList.add('recipe__view');
          modal.classList.add('recipe__add');
          body.classList.add('modal_active');
        }
      },

      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        // var image = new Image();
        var reader = new FileReader();

        reader.onload = (e) => {
          this.$refs.form__input__img.setAttribute('src', e.target.result);

          this.img = e.target.result;
        };
        reader.readAsDataURL(file);
      },

      recipeItem(recipeId, recipeData) {
        let id = recipeId;
        let name = recipeData.name;
        let description = recipeData.description;
        let img = `background-image: url("${recipeData.img}") `;
        let ingredients = recipeData.ingredientsList;

        return {
          id: id,
          name: name ? name : 'Recipe name',
          img: img ? img : 'background-image: url("img/recipe/img_1.png")',
          description: description ? description : 'Recipe description',
          ingredients: ingredients ? ingredients : '',
        };
      },
      getAllRecipes() {
        db.recipeCollection
          .get()
          .then(querySnapshot => {
            // this.recipes = querySnapshot.docs.map(doc => doc.data());
            querySnapshot.forEach((doc) => {
              this.recipes.push(this.recipeItem(doc.id, doc.data()))
              console.log(doc.data())
            })
          })
      },
      addRecipe() {
        this.modalToggle();
        db.recipeCollection
          .add({
            name: this.name,
            img: this.img,
            description: this.description,
            ingredientsList: this.ingredientsList
          })
          .then((doc) => {
            let id = doc.id;
            let data = db.recipeCollection.doc(id);
            data.get().then((docItem) => {
              this.recipes.push(this.recipeItem(id, docItem.data()));
            });
            this.$refs.form__input__img.setAttribute('src', "img/empty.jpg");
            this.name = '';
            this.img = 'background-image: url("img/empty.jpg")';
            this.description = '';
            this.ingredients = '';
            this.ingredientsList = '';
          })
          .catch((error) => {
            console.log("Error " + error)
          });
      },
      editRecipe(recipe) {
        this.modalToggle();
        console.log(recipe);
        this.name = recipe.name;
        this.description = recipe.description;
        this.ingredientsList = recipe.ingredients;
        // let data = {
        //   name: this.name,
        //   description: 'Usasa321'
        // };
        // db.recipeCollection
        //   .doc('4ROmV2iI47OldndFTjru')
        //   .set(data)
        //   .then(() => {
        //     console.log('updated')
        //   });
      },
      removeRecipe(index, id) {

        this.recipes.splice(index, 1);
        console.log(id);
        //DB replacing
        db.recipeCollection
          .doc(id)
          .delete()
          .then(() => {
          });
      },

      addIngredient() {
        this.ingredientsList.push({
          id: this.ingredientsList.length,
          name: this.ingredients,
          editing: true
        });
      },
      editIngredient(ingredient) {
        // if (ingredient.editing == true) {
        //   ingredient.editing = false;
        // } else {
        //   ingredient.editing = true;
        // }
        ingredient.editing ? ingredient.editing = false : ingredient.editing = true
        console.log(ingredient);
      },
      // saveIngredient(ingredient) {
      //   ingredient.editing = false;
      //   console.log(ingredient);
      // },
      removeIngredient(index) {
        console.log(index)
        this.ingredientsList.splice(index, 1);
      }

    },
  };
</script>