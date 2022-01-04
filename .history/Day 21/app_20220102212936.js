const foodBtns = document.querySelectorAll(".food-menu button");
const foodList = document.querySelectorAll(".food-item");

foodBtns.forEach(function (food, index) {
    document.querySelector(".food-item button .active").remove("active");
    food.addEventListener("click", () => {
        food.classList.add("active");
    });
});
