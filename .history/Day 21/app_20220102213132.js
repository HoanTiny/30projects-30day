const foodBtns = document.querySelectorAll(".food-menu button");
const foodList = document.querySelectorAll(".food-item");

foodBtns.forEach(function (food, index) {
    food.addEventListener("click", () => {
        document.querySelector(".food-menu button.active").classList.remove("active");
        food.classList.add("active");
        console.log(food.getAttribute);
    });
});
