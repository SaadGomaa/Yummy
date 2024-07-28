// /JS/Home.module.js

import { Details } from "./details.module.js";
import { Ui } from "./Ui.module.js";

export class Home {
  constructor() {
    this.nameInputTouched = false;
    this.emailInputTouched = false;
    this.phoneInputTouched = false;
    this.ageInputTouched = false;
    this.passwordInputTouched = false;
    this.repasswordInputTouched = false;
    this.submitBtn = document.getElementById("submitBtn");

    // Main Sections
    this.load = document.querySelector(".loading");
    this.home = document.querySelector(".home");
    this.homeDetails = document.querySelector(".details-home");
    this.showSearch = document.querySelector(".search");
    this.homeSearch = document.querySelector(".details-search");
    this.outerCategories = document.querySelector(".outer-categories");
    this.innerCategories = document.querySelector(".inner-categories");
    this.detailsCategories = document.querySelector(".details-categories");
    this.outerArea = document.querySelector(".outer-area");
    this.innerArea = document.querySelector(".inner-area");
    this.detailsArea = document.querySelector(".details-area");
    this.outerInt = document.querySelector(".outer-int");
    this.innerInt = document.querySelector(".inner-int");
    this.detailsInt = document.querySelector(".details-int");

    // Buttons
    this.search = document.getElementById("showSearchInput");
    this.searchByName = document.getElementById("searchByName");
    this.searchByLetter = document.getElementById("searchByLetter");
    this.close = document.querySelector(".btnclose");
    this.Categories = document.getElementById("showCategoriesInput");
    this.Area = document.getElementById("showAreaInput");
    this.Ingredients = document.getElementById("showIngredientsInput");
    this.btn = document.getElementById("btn");
    this.btnn = document.getElementById("ss");

    this.getHome();
    this.addEventListeners();
  }

  addEventListeners() {
    this.close.addEventListener("click", () => {
      this.toggleSideMenu();
    });
    this.search.addEventListener("click", () => {
      this.hideAllSections();
      this.showSearch.classList.remove("d-none");
      this.homeSearch.classList.remove("d-none");
      this.getSearchByName();
      this.getSearchByLetter();
      this.toggleSideMenu();
    });
    this.Categories.addEventListener("click", () => {
      this.hideAllSections();
      this.outerCategories.classList.remove("d-none");
      this.getCaregories();
      this.toggleSideMenu();
    });
    this.Area.addEventListener("click", () => {
      this.hideAllSections();
      this.outerArea.classList.remove("d-none");
      this.getArea();
      this.toggleSideMenu();
    });
    this.Ingredients.addEventListener("click", () => {
      this.hideAllSections();
      this.outerInt.classList.remove("d-none");
      this.getInt();
      this.toggleSideMenu();
    });
    this.btn.addEventListener("click", () => {
      this.hideAllSections();
      this.toggleSideMenu();
      this.btnn.classList.remove("d-none");
      this.showContacts();
    });

    document.getElementById("nameInput").addEventListener("focus", () => {
      this.nameInputTouched = true;
    });

    document.getElementById("emailInput").addEventListener("focus", () => {
      this.emailInputTouched = true;
    });

    document.getElementById("phoneInput").addEventListener("focus", () => {
      this.phoneInputTouched = true;
    });

    document.getElementById("ageInput").addEventListener("focus", () => {
      this.ageInputTouched = true;
    });

    document.getElementById("passwordInput").addEventListener("focus", () => {
      this.passwordInputTouched = true;
    });

    document.getElementById("repasswordInput").addEventListener("focus", () => {
      this.repasswordInputTouched = true;
    });

    document.getElementById("nameInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });

    document.getElementById("emailInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });

    document.getElementById("phoneInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });

    document.getElementById("ageInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });

    document.getElementById("passwordInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });

    document.getElementById("repasswordInput").addEventListener("keyup", () => {
      this.inputsValidation();
    });
  }

  hideAllSections() {
    this.home.classList.add("d-none");
    this.homeDetails.classList.add("d-none");
    this.showSearch.classList.add("d-none");
    this.homeSearch.classList.add("d-none");
    this.outerCategories.classList.add("d-none");
    this.innerCategories.classList.add("d-none");
    this.detailsCategories.classList.add("d-none");
    this.outerArea.classList.add("d-none");
    this.innerArea.classList.add("d-none");
    this.detailsArea.classList.add("d-none");
    this.outerInt.classList.add("d-none");
    this.innerInt.classList.add("d-none");
    this.detailsInt.classList.add("d-none");
    this.btnn.classList.add("d-none");
  }

  toggleSideMenu() {
    if ($(".side-menu").css("width") == "0px") {
      $(".side-menu").css("width", "260px");
      document.querySelector(".btnclose").innerHTML =
        '<i class="fa-solid open-close-icon fa-2x fa-x"></i>';
      var menuLinks = document.querySelector(".menu-links");
      menuLinks.classList.add("show");
    } else {
      $(".side-menu").css("width", "0px");
      document.querySelector(".btnclose").innerHTML =
        '<i class="fa-solid fa-bars fa-2xl"></i>';
      var menuLinks = document.querySelector(".menu-links");
      menuLinks.classList.remove("show");
    }
  }

  async getHome() {
    this.load.classList.remove("d-none");
    let api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    let ui = new Ui();
    ui.displayHome(response.meals);
    let detailsHome = Array.from(document.querySelectorAll(".meal"));
    for (let i = 0; i < detailsHome.length; i++) {
      detailsHome[i].addEventListener("click", () => {
        this.hideAllSections();
        this.homeDetails.classList.remove("d-none");
        new Details().getDetails(detailsHome[i].getAttribute("meal-id"));
      });
    }
  }

  async getSearchByName() {
    this.searchByName.addEventListener("keyup", async (e) => {
      let x = await this.getSearchNameData(e.target.value);
    });
  }

  async getSearchNameData(name) {
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    if (response.meals != "null") {
      let ui = new Ui();
      ui.displaySearchByName(response.meals);
      let detailsSearch = Array.from(document.querySelectorAll(".meal"));
      for (let i = 0; i < detailsSearch.length; i++) {
        detailsSearch[i].addEventListener("click", () => {
          this.hideAllSections();
          this.homeSearch.classList.remove("d-none");
          new Details().getSearchData(detailsSearch[i].getAttribute("meal-id"));
        });
      }
    }
  }

  async getSearchByLetter() {
    this.searchByLetter.addEventListener("keyup", async (e) => {
      let x = await this.getSearchLetterData(e.target.value.charAt(0));
    });
  }

  async getSearchLetterData(name) {
    this.home.classList.add("d-none");
    this.load.classList.remove("d-none");
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    if (response.meals != "null") {
      this.home.classList.add("d-none");
      let ui = new Ui();
      ui.displaySearchByLetter(response.meals);
      let detailsSearch = Array.from(document.querySelectorAll(".meal"));
      for (let i = 0; i < detailsSearch.length; i++) {
        detailsSearch[i].addEventListener("click", () => {
          this.hideAllSections();
          this.homeSearch.classList.remove("d-none");
          new Details().getSearchData(detailsSearch[i].getAttribute("meal-id"));
          this.home.classList.add("d-none");
        });
      }
    } else {
      this.home.classList.add("d-none");
    }
  }

  async getCaregories() {
    this.load.classList.remove("d-none");
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    let ui = new Ui();
    ui.displayCategories(response.categories);
    let categoriesFav = Array.from(document.querySelectorAll(".meal"));
    categoriesFav.forEach((category) => {
      category.addEventListener("click", async () => {
        this.innerCategories.classList.remove("d-none");
        this.outerCategories.classList.add("d-none");
        await new Details().getOuterCategories(
          category.getAttribute("meal-Name")
        );
        let categoriesDetails = Array.from(document.querySelectorAll(".meal"));
        categoriesDetails.forEach((detail) => {
          detail.addEventListener("click", async () => {
            this.hideAllSections();
            this.detailsCategories.classList.remove("d-none");
            await new Details().getDetailsCat(detail.getAttribute("meal-id"));
          });
        });
      });
    });
  }

  async getArea() {
    this.load.classList.remove("d-none");
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    let ui = new Ui();
    ui.displayArea(response.meals);
    let areaFav = Array.from(document.querySelectorAll(".meal"));
    areaFav.forEach((area) => {
      area.addEventListener("click", async () => {
        this.hideAllSections();
        this.innerArea.classList.remove("d-none");
        await new Details().getOuterArea(area.getAttribute("meal-Name"));
        let areaDetails = Array.from(document.querySelectorAll(".meal"));
        areaDetails.forEach((detail) => {
          detail.addEventListener("click", async () => {
            this.hideAllSections();
            this.detailsArea.classList.remove("d-none");
            await new Details().getDetailsArea(detail.getAttribute("meal-id"));
          });
        });
      });
    });
  }

  async getInt() {
    this.load.classList.remove("d-none");
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    let response = await api.json();
    this.load.classList.add("d-none");
    let ui = new Ui();
    ui.displayInt(response.meals);
    let areaInt = Array.from(document.querySelectorAll(".meal"));
    areaInt.forEach((int) => {
      int.addEventListener("click", async () => {
        this.hideAllSections();
        this.innerInt.classList.remove("d-none");
        await new Details().getOuterInt(int.getAttribute("meal-Name"));
        let intDetails = Array.from(document.querySelectorAll(".meal"));
        intDetails.forEach((detail) => {
          detail.addEventListener("click", async () => {
            this.hideAllSections();
            this.detailsInt.classList.remove("d-none");
            await new Details().getDetailsInt(detail.getAttribute("meal-id"));
          });
        });
      });
    });
  }

  showContacts() {
    this.btnn.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `;

    this.addEventListeners();
  }



  inputsValidation() {
    if (this.nameInputTouched) {
      if (this.nameValidation()) {
        document
          .getElementById("nameAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("nameAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (this.emailInputTouched) {
      if (this.emailValidation()) {
        document
          .getElementById("emailAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("emailAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.phoneInputTouched) {
      if (this.phoneValidation()) {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.ageInputTouched) {
      if (this.ageValidation()) {
        document
          .getElementById("ageAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("ageAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.passwordInputTouched) {
      if (this.passwordValidation()) {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (this.repasswordInputTouched) {
      if (this.repasswordValidation()) {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (
      this.nameValidation() &&
      this.emailValidation() &&
      this.phoneValidation() &&
      this.ageValidation() &&
      this.passwordValidation() &&
      this.repasswordValidation()
    ) {
      if (this.submitBtn) {
        this.submitBtn.removeAttribute("disabled");
        this.submitBtn.classList.add("active"); 
      }
    } 
  }

  nameValidation() {
    return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
  }

  emailValidation() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      document.getElementById("emailInput").value
    );
  }

  phoneValidation() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      document.getElementById("phoneInput").value
    );
  }

  ageValidation() {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
      document.getElementById("ageInput").value
    );
  }

  passwordValidation() {
    return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
      document.getElementById("passwordInput").value
    );
  }

  repasswordValidation() {
    return (
      document.getElementById("repasswordInput").value ==
      document.getElementById("passwordInput").value
    );
  }
}
