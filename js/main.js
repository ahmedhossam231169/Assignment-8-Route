var cartons = document.getElementById("cartona")

var food1 = {
  name: "Margherita Pizza",
  Country: "Italian",
  level: "Intermediate",
  rate: 4.7,
  reviews: 410,
  prepTime: 45,
  cookTime: 35,
  servings: 3,
  foodDisc: "Creamy pasta with grilled chicken and parmesan sauce",
  Ingredients: ["","1 large romaine lettuce", "Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh basil leaves", 'Olive oil'],

  Instructions: ["","Prepare the pizza dough and let it rest until soft and stretchy", "Spread tomato sauce evenly over the dough.", "Add fresh mozzarella cheese slices on top.", "Drizzle a little olive oil over the pizza.", "Bake in a very hot oven until the crust becomes golden and crispy."],
  Nutrition: [580 ,18 ,50,23,10,900],
  tips: ["Use fresh mozzarella for the best melting texture and flavor.","Bake on a very hot oven to get a crispy crust.","Add fresh basil after baking to keep its aroma and taste.","Don’t overload with sauce or cheese to keep it light and balanced."],
  img: "imgs/pizza.jpg"
}
var food2 = {
  name: "Koshari",
  Country: "Egyptian",
  level: "Intermediate",
  rate: 5.0,
  reviews: 602,
  prepTime: 10,
  cookTime: 10,
  servings: 3,
  foodDisc: "Koshari is a traditional Egyptian street food known for its rich flavors and satisfying mix of ingredients. It is made from layers of rice, lentils, and pasta, topped with chickpeas and crispy fried onions. What makes",
  Ingredients: ["","rice", "pasta", "onion", "salsa", "spices", "Chickpeas", "vinegar"],

  Instructions: ["","Cook the rice and lentils together until soft and fully cooked.", "Boil the pasta separately until al dente, then drain it.", "Prepare the tomato sauce by sautéing garlic in oil, then adding tomato sauce.", "Fry sliced onions in hot oil until they become crispy and golden brown.", "Mix rice, lentils, and pasta together in a serving dish.", "Add chickpeas on top.", "Pour the tomato sauce over everything."],
  Nutrition:[700 ,25 ,45,30,15,740],
  tips: ["Cook each component separately (rice, lentils, pasta) for the best texture.","Fry onions slowly until deeply golden and crispy for maximum flavor.","Balance the tomato sauce with a little vinegar and sugar to reduce acidity.","Let the layers rest a minute before serving so the flavors combine well."],
  img: "imgs/koshari.jpg"
}
var food3 = {
  name: "Chicken Alfredo Pasta",
  Country: "Italian",
  level: "Intermediate",
  rate: 4.8,
  reviews: 540,
  prepTime: 15,
  cookTime: 40,
  servings: 3,
  foodDisc: "Creamy Chicken Alfredo Pasta made with rich parmesan sauce, tender chicken, and perfectly cooked pasta for a smooth and comforting Italian dish.",
  Ingredients: ["","Fettuccine pasta", "Chicken breast", "Butter", "Heavy cream", "Parmesan cheese", "Garlic", "Mushrooms"],

  Instructions:["","Cook the pasta in salted boiling water until al dente, then drain it.","Season chicken breast with salt and black pepper.","Cook the chicken in a pan with butter and olive oil until golden and fully cooked, then slice it.","In the same pan, add minced garlic and sauté for a few seconds.","Pour in heavy cream and let it simmer gently.","Add the cooked pasta into the sauce and mix well."],
    Nutrition:[560 ,35 ,50,29,8,650],
  tips: ["Don’t overcook the pasta; keep it al dente so it holds the sauce well.","Use freshly grated Parmesan for a smoother and richer sauce.","Cook the sauce on low heat to avoid separating the cream.","Season the chicken well before cooking for deeper flavor."],
  img: "imgs/chicken-fettuccine.jpg"
}
var food4 = {
  name: "Seafood Soup",
  Country: "Italian",
  level: "Easy",
  rate: 4.6,
  reviews: 360,
  prepTime: 25,
  cookTime: 30,
  servings: 5,
  foodDisc: "Seafood Soup is a rich and comforting dish made with a delicious mix of shrimp, fish, calamari, and other fresh seafood cooked in a flavorful creamy broth. It is seasoned with garlic, herbs, and spices to create a warm ocean-inspired taste that is both light and satisfying.",
  Ingredients: ["","fish", "butter", "heavyCream", "black paper", "salt", "creamy cheese"],
  Instructions: ["","Heat olive oil or butter in a large pot over medium heat.","Sauté chopped onion and garlic until soft and fragrant.","Add chopped vegetables like carrots and celery and cook for a few minutes.","Pour in fish or seafood stock and bring it to a gentle boil.","Add the seafood (shrimp, fish, calamari, mussels) and let it cook until just done."],
  Nutrition:[650 ,60 ,57,36,28,450],
  tips: ["Use fresh seafood for the best flavor and texture.","Add seafood at the end so it doesn’t overcook and become rubbery.","Use seafood or fish stock instead of water for a richer taste.","Simmer gently—don’t boil too hard—to keep the broth clear and smooth."],
  img: "imgs/Irish-seafood-chowder-11.jpg"
}
var food5 = {
  name: "Beef Burger",
  Country: "American",
  level: "Easy",
  rate: 4.5,
  reviews: 780,
  prepTime: 10,
  cookTime: 15,
  servings: 2,
  foodDisc: "Juicy grilled beef burger served with fresh vegetables and special sauce.",
  Ingredients: ["","Beef patty", "Burger buns", "Lettuce", "Tomato", "Cheddar cheese", "Burger sauce"],
  Instructions: [
    "",
    "Grill the beef patty until cooked.",
    "Toast the burger buns lightly.",
    "Add lettuce, tomato, and cheese.",
    "Place the beef patty inside the bun.",
    "Add sauce and serve."
  ],
  Nutrition: [550, 30, 40, 28, 12, 800],
  tips: [
    "Don’t overcook the meat.",
    "Use fresh buns.",
    "Let meat rest before serving.",
    "Add sauce last."
  ],
  img: "imgs/41611-4.7oz-Angus-Beef-Burger-lo-res-2-10-21-2014-1.jpg"
};
var food6 = {
  name: "Shawarma Wrap",
  Country: "Middle Eastern",
  level: "Medium",
  rate: 4.8,
  reviews: 920,
  prepTime: 20,
  cookTime: 25,
  servings: 3,
  foodDisc: "Spiced chicken shawarma wrapped in soft bread with garlic sauce.",
  Ingredients: ["","Chicken slices", "Flatbread", "Garlic sauce", "Pickles", "Tomato", "Onion"],
  Instructions: [
    "",
    "Marinate chicken with spices.",
    "Grill chicken until golden.",
    "Warm the bread.",
    "Add chicken and vegetables.",
    "Roll and serve."
  ],
  Nutrition: [480, 35, 45, 18, 10, 700],
  tips: [
    "Marinate chicken overnight.",
    "Use hot grill for best taste.",
    "Don’t overload wrap.",
    "Add sauce generously."
  ],
  img: "imgs/Chicken-Shawarma-Recipe_-9.jpg"
};
var food7 = {
  name: "Vegetable Soup",
  Country: "International",
  level: "Easy",
  rate: 4.3,
  reviews: 300,
  prepTime: 10,
  cookTime: 30,
  servings: 4,
  foodDisc: "Healthy vegetable soup packed with fresh seasonal vegetables.",
  Ingredients: ["","Carrot", "Potato", "Zucchini", "Onion", "Celery", "Vegetable stock","salt",'black paper',"butter"],
  Instructions: [
    "",
    "add water to pot",
    "Chop all vegetables.",
    "Heat oil in a pot.",
    "Add vegetables and sauté.",
    "Pour vegetable stock.",
    "Simmer until soft."
  ],
  Nutrition: [180, 5, 35, 2, 8, 300],
  tips: [
    "Use fresh vegetables.",
    "Don’t overcook.",
    "Add herbs for flavor.",
    "Serve hot."
  ],
  img: "imgs/broccoli-veggie-soup-5.webp"
};
var food8 = {
  name: "Grilled Salmon",
  Country: "Japanese",
  level: "Medium",
  rate: 4.9,
  reviews: 640,
  prepTime: 15,
  cookTime: 20,
  servings: 2,
  foodDisc: "Healthy grilled salmon served with lemon and herbs.",
  Ingredients: ["Salmon fillet", "Lemon", "Olive oil", "Garlic", "Salt", "Black pepper","butter","rosemary"],
  Instructions: [
    "",
    "Season salmon with spices.",
    "Heat grill pan.",
    "Grill salmon until cooked.",
    "Add lemon juice.",
    "Serve hot."
  ],
  Nutrition: [420, 40, 0, 25, 0, 200],
  tips: [
    "Don’t overcook salmon.",
    "Use fresh fish.",
    "Add lemon after cooking.",
    "Rest before serving."
  ],
  img: "imgs//Easy-Grilled-Salmon.jpg"
};
var food9 = {
  name: "Spaghetti Bolognese",
  Country: "Italian",
  level: "Easy",
  rate: 4.6,
  reviews: 510,
  prepTime: 15,
  cookTime: 40,
  servings: 4,
  foodDisc: "Classic pasta dish with rich meat tomato sauce.",
  Ingredients: ["","Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Olive oil"],
  Instructions: [
    "",
    "Cook spaghetti until al dente.",
    "Sauté onion and garlic.",
    "Add ground beef and cook.",
    "Pour tomato sauce and simmer.",
    "Mix with pasta and serve."
  ],
  Nutrition: [620, 28, 75, 22, 6, 850],
  tips: [
    "Simmer sauce slowly.",
    "Use fresh garlic.",
    "Don’t overcook pasta.",
    "Add parmesan on top."
  ],
  img: "imgs/Crock-Pot-Bolognese-Sauce-01.jpg"
};
var food10 = {
  name: "Fried Chicken",
  Country: "American",
  level: "Medium",
  rate: 4.7,
  reviews: 890,
  prepTime: 20,
  cookTime: 25,
  servings: 4,
  foodDisc: "Crispy fried chicken with golden crust and juicy inside.",
  Ingredients: ["","Chicken pieces", "Flour", "Eggs", "Spices", "Oil", "Salt", "black paper","cold water"],
  Instructions: [
    "",
    "Season chicken well.",
    "Dip in egg and flour mix.",
    "Heat oil in pan.",
    "Fry until golden.",
    "Drain and serve."
  ],
  Nutrition: [700, 45, 50, 40, 20, 900],
  tips: [
    "Use hot oil.",
    "Marinate chicken first.",
    "Don’t overcrowd pan.",
    "Let it rest before serving."
  ],
  img: "imgs/Easy-Fried-Chicken-on-a-plate.jpg"
};
var food11 = {
  name: "Greek Salad",
  Country: "Greek",
  level: "Easy",
  rate: 4.4,
  reviews: 320,
  prepTime: 10,
  cookTime: 0,
  servings: 2,
  foodDisc: "Fresh salad with vegetables, olives, and feta cheese.",
  Ingredients: ["","Cucumber", "Tomato", "Olives", "Feta cheese", "Onion", "Olive oil"],
  Instructions: [
    "",
    "Chop all vegetables.",
    "Add olives and feta cheese.",
    "Drizzle olive oil.",
    "Mix gently.",
    "Serve fresh."
  ],
  Nutrition: [250, 8, 20, 15, 5, 300],
  tips: [
    "Use fresh vegetables.",
    "Don’t overmix.",
    "Add olive oil before serving.",
    "Keep it cold."
  ],
  img: "imgs/greek-salad-3-1.jpg"
};


var warnTime = ""
var foods = [food1, food2, food3, food4,food5,food6,food7,food8,food9,food10,food11]
var random = 0
var sandok = ""
var sandokInstructions = ""


function getIngredients() {
  sandok = ""
  for (let ing = 1; ing < foods[random].Ingredients.length; ing++) {
    sandok += `<li class="d-flex align-items-center gap-2"><i class="fa-solid fa-${ing}"></i>${foods[random].Ingredients[ing]}</li>`
  }
}
function getInstructions() {
  sandokInstructions = ""
  for (let ins = 1; ins < foods[random].Instructions.length; ins++) {
    sandokInstructions += `<li class="d-flex align-items-center gap-2"><i class="fa-solid fa-${ins}"></i>${foods[random].Instructions[ins]}</li>`
  }
}
function showRandomProduct() {
  var randomIndex = Math.floor(Math.random() * foods.length);

  random = randomIndex;

  return random;
}
function translateRes() {
  showRandomProduct();
  getIngredients()
  getInstructions()
  var redTime = foods[random].prepTime + foods[random].cookTime;

  if (redTime >= 45) {
    warnTime = `
  <div class="warn-time d-flex align-items-center gap-2 mt-3">
    <i class="fa-solid fs-4 fa-triangle-exclamation"></i>
    <div class="Extended">
      <h3>Extended Preparation Time</h3>
      <span>This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
    </div>
  </div>`

  } else {
    warnTime = `
  <div class="warn-time d-none align-items-center gap-2 mt-3">
    <i class="fa-solid fs-4 fa-triangle-exclamation"></i>
    <div class="Extended">
      <h3>Extended Preparation Time</h3>
      <span>This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
    </div>
  </div>`
  }
  cartons.innerHTML= `
  <header class="bg-white py-3 px-lg-3 shadow-sm">
    <div class="container">
      <nav class="navbar p-0 navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-between">
          <div class="web-name d-flex gap-2 align-items-center">
            <div class="icon shadow-lg"><i class="fa-solid fa-utensils"></i></div>
            <div class="name d-flex flex-column">
              <h4 class="fw-bolder m-0">What's For Dinner</h4>
              <span class="text-black-50 ">Your daily meal inspiration</span>
            </div>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon fs-2 d-flex justify-content-center align-items-center"><i
                class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0 mt-lg-0 mt-3 align-items-center" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto d-flex gap-3 fs-5 align-items-lg-center text-black-50 mb-2 mb-lg-0">
              <li class="nav-item d-flex align-items-center gap-2">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-lg-none">Saved Recipes</span>
              </li>
              <li class="nav-item d-flex align-items-center gap-2">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <span class="d-lg-none">Recent</span>
              </li>
              <li class="nav-item d-flex align-items-center gap-2">
                <i class="fa-solid fa-gear"></i>
                <span class="d-lg-none">Settings</span>
              </li>
              <li class="nav-item d-flex align-items-center gap-2">
                <div class="icon shadow-lg"></div>
                <span class="d-lg-none">Profile</span>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <section>
      <div class="container mt-1 mt-lg-5 m-auto  " id="main-container">
        <div class="row flex-column flex-lg-row h-75">
          <div class="col-12 col-lg-5 p-0  h-100">
            <div class="inner position-relative">
              <div class="res-rev d-flex align-items-center bg-white gap-2  m-3">
                <span class="fs-5 fw-bolder"><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
                  4.9</span>
                <span class="text-black-50">(${foods[random].reviews} reviews)</span>
              </div>
              <img src=${foods[random].img} class="img-fluid" alt="food-img">
              <div class="res-info bg-white position-absolute d-flex justify-content-between gap-3 ">
                <div class="prep d-flex flex-column gap-1 align-items-center justify-content-center">
                  <i class="fa-solid fa-clock fs-4" style="color: #ff6900;"></i>
                  <span class="text-black-50">Prep Time</span>
                  <span class="fs-5 fw-bold">${foods[random].prepTime} min</span>
                </div>
                <div class="prep d-flex flex-column gap-1 align-items-center justify-content-center">
                  <i class="fa-solid fa-fire-burner fs-4" style="color: #fb2c36;"></i>
                  <span class="text-black-50">Cook Time</span>
                  <span class="fs-5 fw-bold">${foods[random].cookTime} min</span>
                </div>
                <div class="prep d-flex flex-column gap-1 align-items-center justify-content-center">
                  <i class="fa-solid fa-people-line fs-4" style="color: #2b7fff;"></i>
                  <span class="text-black-50">Servings</span>
                  <span class="fs-5 fw-bold">${foods[random].servings} people</span>
                </div>
              </div>

            </div>



          </div>
          <div class="col-12 col-lg-7 bg-white res-left-col p-0 h-100 ">
            <div class="res-details p-4 h-100">
              <div class="header">
                <div class="d-flex gap-2">
                  <span class="level fw-bold">${foods[random].level}</span>
                  <span class="country fw-bold">${foods[random].Country}</span>
                </div>
                <div class="res-name d-flex justify-content-between align-items-center mt-3">
                  <h2 class="fw-bold fs-1">${foods[random].name}</h2>
                  <div class="share d-flex gap-2">
                    <div class="icon"><i class="fa-solid fa-bookmark fs-5"></i></div>
                    <div class="icon"><i class="fa-solid fa-share-nodes fs-5"></i></div>
                  </div>
                </div>
                <span class=" food-discr text-black-50 fs-5">${foods[random].foodDisc}</span>
              </div>
              ${warnTime}
              <ul
                class="nav nav-pills mb-3 mt-5 d-flex flex-nowrap overflow-auto gap-3 align-items-center border-bottom border-1 pb-3"
                id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active flex-shrink-0" id="pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                    aria-selected="true"><i class="fa-solid fa-list-check"></i> Ingredients</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link flex-shrink-0" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                    aria-selected="false"><i class="fa-solid fa-book-open"></i> Instructions</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link flex-shrink-0" id="pills-contact-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                    aria-selected="false"><i class="fa-solid fa-chart-pie"></i> Nutrition</button>
                </li>

                <li class="nav-item" role="presentation">
                  <button class="nav-link flex-shrink-0" id="pills-tips-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-tips" type="button" role="tab" aria-controls="pills-tips"
                    aria-selected="false"><i class="fa-solid fa-lightbulb"></i> Chef's Tips</button>
                </li>

              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                  tabindex="0">
                  <ul class="d-flex flex-column gap-3 p-4">
                    ${sandok}
                  </ul>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                  tabindex="0">
                  <ul class="d-flex flex-column gap-3 p-4">
                    ${sandokInstructions}
                  </ul>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                  tabindex="0">
                  <div class="container">
                   <div class="row g-2">
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-fire"
                              style="color: #f54900;"></i><span class="fs-5">Calories</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[0]} kcal
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-dumbbell"
                              style="color: #155DFC; background-color: #DBEAFE;"></i><span class="fs-5">Protein</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[1]}g
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-wheat-awn"
                              style="color: #D08700; background-color: #FEF9C2;"></i><span
                              class="fs-5">Carbohydrates</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[2]}g
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-droplet"
                              style="color: #E7000B; background-color: #FFE2E2;"></i><span class="fs-5">Fat</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[3]}g
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-seedling"
                              style="color: #00A63E; background-color: #DBFCE7;"></i><span class="fs-5">Fiber</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[4]}g
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="inner d-flex justify-content-between align-items-center bg-light p-4 rounded-3">
                          <div class="right d-flex gap-2 align-items-center"><i class="fa-solid fa-cube"
                              style="color: #E60076; background-color: #FCE7F3;"></i><span class="fs-5">Sodium</span>
                          </div>
                          <span id="cal-num" class="fs-4 fw-bold">
                            ${foods[random].Nutrition[5]}mg
                          </span>
                        </div>

                      </div>
                    </div>
                    
                  </div>
                </div>
              <div class="tab-pane fade" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                  tabindex="0">

                  <div class="tip-card d-flex gap-3 mb-3">
                    <i class="fa-solid fa-check"></i>
                    <span>${foods[random].tips[0]}</span>
                  </div>
                  <div class="tip-card d-flex gap-3 mb-3">
                    <i class="fa-solid fa-check"></i>
                    <span>${foods[random].tips[1]}</span>
                  </div>
                  <div class="tip-card d-flex gap-3 mb-3">
                    <i class="fa-solid fa-check"></i>
                    <span>${foods[random].tips[2]}</span>
                  </div>
                  <div class="tip-card d-flex gap-3 mb-3">
                    <i class="fa-solid fa-check"></i>
                    <span>${foods[random].tips[3]}</span>
                  </div>
                </div>
              </div>
              <button onclick="translateRes()" class="reset-btn"><i class="fa-solid fa-rotate me-2"></i>Try Another Recipe</button>
            </div>
          </div>
        </div>

    </section>

  </main>`

console.log(redTime)

}
translateRes()
