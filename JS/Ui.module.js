export class Ui {
  constructor() {}
  displayHome(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
        <div class="col-md-3 meal" meal-id="${data[i].idMeal}">
          <div class="position-relative rounded-2 overflow-hidden">
            <img
              src="${data[i].strMealThumb}"
              alt=""
              class="w-100 rounded-2"
            />
            <div class="meal-layer rounded-2">
              <h3>${data[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    }
    document.getElementById("row-data").innerHTML = cartona;
  }
  displayHomeDetails(data) {
    let meal = data.meals[0];
    let ingredientsList = "";
    for (let i = 0; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
      }
    }
    const tagsList = meal.strTags
      ? meal.strTags
          .split(",")
          .map(
            (tag) => `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`
          )
          .join("")
      : "";
    const cartona = `<div class="col-md-4">
    <img
      src="${meal.strMealThumb}"
      class="w-100 rounded-3"
      alt=""
    />
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${ingredientsList}
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${tagsList}
    </ul>
    <a
      target="_blank"
      href="${meal.strSource}"
      class ="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${meal.strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>`;
    document.getElementById("detailsContent").innerHTML = cartona;
  }
  displaySearchByName(data) {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
      cartona += `
        <div class="col-md-3 meal" meal-id="${data[i].idMeal}">
          <div class="position-relative rounded-2 overflow-hidden">
            <img
              src="${data[i].strMealThumb}"
              alt=""
              class="w-100 rounded-2"
            />
            <div class="meal-layer rounded-2">
              <h3>${data[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    }
    document.getElementById("data").innerHTML = cartona;
  }
  displaySearchByLetter(data) {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
      cartona += `
        <div class="col-md-3 meal" meal-id="${data[i].idMeal}">
          <div class="position-relative rounded-2 overflow-hidden">
            <img
              src="${data[i].strMealThumb}"
              alt=""
              class="w-100 rounded-2"
            />
            <div class="meal-layer rounded-2">
              <h3>${data[i].strMeal}</h3>
            </div>
          </div>
        </div>
        `;
    }
    document.getElementById("data").innerHTML = cartona;
  }
  displaySearchDetails(data) {
    const meal = data.meals[0];
    let ingredientsList = "";
    for (let i = 0; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
      }
    }
    const tagsList = meal.strTags
      ? meal.strTags
          .split(",")
          .map(
            (tag) => `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`
          )
          .join("")
      : "";
    const cartona = `<div class="col-md-4">
    <img
      src="${meal.strMealThumb}"
      class="w-100 rounded-3"
      alt=""
    />
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${ingredientsList}
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${tagsList}
    </ul>
    <a
      target="_blank"
      href="${meal.strSource}"
      class ="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${meal.strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>`;
    document.getElementById("detailsSearchContent").innerHTML = cartona;
  }
  displayCategories(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
      <div class="col-md-3 meal" meal-id="${data[i].idCategory}" meal-Name="${
        data[i].strCategory
      }">
      <div class=" position-relative rounded-2">
        <img
          class="w-100"
          src="${data[i].strCategoryThumb}"
          alt=""
          srcset=""
        />
        <div
          class="meal-layer position-absolute text-center text-black p-2 flex-column"
        >
          <h3>${data[i].strCategory}</h3>
          <p>${data[i].strCategoryDescription
            .split(" ")
            .slice(0, 20)
            .join(" ")}</p>
        </div>
      </div>
    </div>
        `;
    }
    document.getElementById("detailsCategoriesContent").innerHTML = cartona;
  }
  displayInnerCategories(data) {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
      cartona += `
      <div class="col-md-3 meal" meal-id="${data.meals[i].idMeal}">
            <div
              class=" position-relative overflow-hidden rounded-2 cursor-pointer"
            >
              <img
                class="w-100"
                src="${data.meals[i].strMealThumb}"
                alt=""
                srcset=""
              />
              <div
                class="meal-layer position-absolute d-flex align-items-center text-black p-2"
              >
                <h3>${data.meals[i].strMeal}</h3>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("detailsCategoriesContentInner").innerHTML =
      cartona;
  }
  displayCategoriesDetails(data) {
    let meal = data.meals[0];
    let ingredientsList = "";
    for (let i = 0; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
      }
    }
    const tagsList = meal.strTags
      ? meal.strTags
          .split(",")
          .map(
            (tag) => `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`
          )
          .join("")
      : "";
    const cartona = `<div class="col-md-4">
    <img
      src="${meal.strMealThumb}"
      class="w-100 rounded-3"
      alt=""
    />
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${ingredientsList}
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${tagsList}
    </ul>
    <a
      target="_blank"
      href="${meal.strSource}"
      class ="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${meal.strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>`;
    document.getElementById("detailsCategoriesInner").innerHTML = cartona;
  }
  displayArea(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `<div class="col-md-3 meal" meal-Name="${data[i].strArea}">
      <div class="rounded-2 text-center ">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${data[i].strArea}</h3>
      </div>
    </div>`;
    }
    document.getElementById("detailsAreaContent").innerHTML = cartona;
  }
  displayInnerArea(data) {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
      cartona += `
      <div class="col-md-3 meal" meal-id="${data.meals[i].idMeal}">
            <div
              class=" position-relative overflow-hidden rounded-2 cursor-pointer"
            >
              <img
                class="w-100"
                src="${data.meals[i].strMealThumb}"
                alt=""
                srcset=""
              />
              <div
                class="meal-layer position-absolute d-flex align-items-center text-black p-2"
              >
                <h3>${data.meals[i].strMeal}</h3>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("detailsAreaContentInner").innerHTML = cartona;
  }
  displayAreaDetails(data) {
    let meal = data.meals[0];
    let ingredientsList = "";
    for (let i = 1; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
      }
    }
    const tagsList = meal.strTags
      ? meal.strTags
          .split(",")
          .map(
            (tag) => `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`
          )
          .join("")
      : "";
    const cartona = `<div class="col-md-4">
    <img
      src="${meal.strMealThumb}"
      class="w-100 rounded-3"
      alt=""
    />
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${ingredientsList}
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${tagsList}
    </ul>
    <a
      target="_blank"
      href="${meal.strSource}"
      class ="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${meal.strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>`;
    document.getElementById("detailsAreaInner").innerHTML = cartona;
  }
  displayInt(data) {
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
      cartona += `<div class="col-md-3 meal text-center " meal-Name="${
        data[i].strIngredient
      }">
      <div class="rounded-2 ">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${data[i].strIngredient}</h3>
              <p>${data[i].strDescription.split(" ").slice(0, 16).join(" ")}</p>
      </div>
</div>`;
    }
    document.getElementById("detailsIntContent").innerHTML = cartona;
  }
  displayInnerInt(data) {
    let cartona = ``;
    for (let i = 0; i < data.meals.length; i++) {
      cartona += `
      <div class="col-md-3 meal" meal-id="${data.meals[i].idMeal}">
            <div
              class=" position-relative overflow-hidden rounded-2 cursor-pointer"
            >
              <img
                class="w-100"
                src="${data.meals[i].strMealThumb}"
                alt=""
                srcset=""
              />
              <div
                class="meal-layer position-absolute d-flex align-items-center text-black p-2"
              >
                <h3>${data.meals[i].strMeal}</h3>
              </div>
            </div>
          </div>
        `;
    }
    document.getElementById("detailsIntContentInner").innerHTML = cartona;
  }
  displayIntDetails(data) {
    let meal = data.meals[0];
    let ingredientsList = "";
    for (let i = 1; i < 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
      }
    }
    const tagsList = meal.strTags
      ? meal.strTags
          .split(",")
          .map(
            (tag) => `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`
          )
          .join("")
      : "";
    const cartona = `<div class="col-md-4">
    <img
      src="${meal.strMealThumb}"
      class="w-100 rounded-3"
      alt=""
    />
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
    <h2>Instructions</h2>
    <p>${meal.strInstructions}</p>
    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${ingredientsList}
    </ul>
    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    ${tagsList}
    </ul>
    <a
      target="_blank"
      href="${meal.strSource}"
      class ="btn btn-success"
      >Source</a
    >
    <a
      target="_blank"
      href="${meal.strYoutube}"
      class="btn btn-danger"
      >Youtube</a
    >
  </div>`;
    document.getElementById("detailsIntInner").innerHTML = cartona;
  }
}
