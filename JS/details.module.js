import { Ui } from "./Ui.module.js";

export class Details {
  constructor(mealId) {
    this.load = document.querySelector(".loading");
    this.getDetails(mealId);
  }

  async getDetails(id) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    if (response.meals && response.meals.length > 0) {
      let deatailsHome = new Ui();
      deatailsHome.displayHomeDetails(response);
    }
  }
  async getSearchData(id) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    let deatailsDetails = new Ui();
    deatailsDetails.displaySearchDetails(response);
  }
  async getOuterCategories(name) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    let response = await api.json();
    let innerCategories = new Ui();
    innerCategories.displayInnerCategories(response);
  }
  async getDetailsCat(id) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let response = await api.json();

    this.load.classList.add("d-none");
    if (response.meals && response.meals.length > 0) {
      let detailsHome = new Ui();
      detailsHome.displayCategoriesDetails(response);
    } else {
      console.error("No meals found for the given ID");
    }
  }
  async getOuterArea(name) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
    );
    let response = await api.json();
    let innerCategories = new Ui();
    innerCategories.displayInnerArea(response);
  }
  async getDetailsArea(id) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let response = await api.json();

    this.load.classList.add("d-none");
    if (response.meals && response.meals.length > 0) {
      let detailsHome = new Ui();
      detailsHome.displayAreaDetails(response);
    } else {
      console.error("No meals found for the given ID");
    }
  }
  async getOuterInt(name) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
    );
    let response = await api.json();
    let innerCategories = new Ui();
    innerCategories.displayInnerInt(response);
  }
  async getDetailsInt(id) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let response = await api.json();

    this.load.classList.add("d-none");
    if (response.meals && response.meals.length > 0) {
      let detailsHome = new Ui();
      detailsHome.displayIntDetails(response);
    } else {
      console.error("No meals found for the given ID");
    }
  }
}
