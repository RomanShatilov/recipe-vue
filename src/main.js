import Vue from "vue";
import App from "./App.vue";
import router from './routers';
import db from '../config/firebaseConfig';

new Vue({
  db,
  router,
  render: h => h(App)
}).$mount("#app");


let body = document.querySelector('body');
let modal = document.querySelector('.recipe__modal');
document.querySelector('.header__button button').onclick = () => {
  modal.classList.add('recipe__add');
  body.classList.add('modal_active');
}
document.querySelector('.recipe__modal__close button').onclick = () => {
  modal.classList.remove('recipe__view');
  modal.classList.remove('recipe__add');
  body.classList.remove('modal_active');
}
// function masonry() {
//   let recipeWrapper       = document.body.querySelector('.recipe__list');
//   let colCount = 3;
//   if (window.innerWidth < 1200 && window.innerWidth > 768) {
//     colCount = 2;
//   } else if (window.innerWidth < 768) {
//     colCount = 1;
//   }
//   let colHeights = [];
//   for (let i = 0; i <= colCount; i++) {
//     colHeights.push(0);
//   }
//   for (let i = 0; i < recipeWrapper.children.length; ++i) {
//     let order = (i + 1) % colCount || colCount;
//     let width = recipeWrapper.offsetWidth / colCount;
//     recipeWrapper.children[i].style.order = order;
//     recipeWrapper.children[i].style.width = `${width}px`;
//     colHeights[order] += parseFloat(recipeWrapper.children[i].offsetHeight);
//   }
//   let highest = Math.max.apply(Math, colHeights);
//   recipeWrapper.style.height = `${highest}px`;
// }

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     let reader = new FileReader();
//     let image = document.querySelector('.form__input__img img');
//     reader.onload = function (e) {
//       image.setAttribute('src', e.target.result);
//     };
//     reader.readAsDataURL(input.files[0]);
//   }
//   return null;
// }

// function inputValid(input) {
//   document.querySelectorAll(input).forEach(function (item) {
//     item.onchange = function () {
//       if (this.value !== '') {
//         this.classList.add('valid');
//       } else {
//         this.classList.remove('valid');
//       }
//     };
//     if (item.value !== '') {
//       item.classList.add('valid');
//     } else {
//       item.classList.remove('valid');
//     }
//   });
//   return null;
// }
// masonry();
//
// inputValid('input');
// inputValid('textarea');