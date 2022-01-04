const foodBtns = document.querySelectorAll(".food-menu button");
const foodList = document.querySelectorAll(".food-item");

foodBtns.forEach(function (food, index) {
    food.addEventListener("click", () => {
        console.log("hi");
    });
});
