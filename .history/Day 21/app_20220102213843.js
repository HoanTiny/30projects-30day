const foodBtns = document.querySelectorAll(".food-menu button");
const foodList = document.querySelectorAll(".food-item");

foodBtns.forEach(function (btn, index) {
    btn.addEventListener("click", () => {
        document.querySelector(".food-menu button.active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.getAttribute("type-food"));
        const atb = btn.getAttribute("type-food");
        foodList.forEach(function (food, index) {
            if (food.getAttribute("type-food") === atb) {
                food.classList.remove("hide");
            } else {
                food.classList.add("hide");
            }
        });
        if (atb === "all") {
            foodList.classList.remove("hide");
        }
    });
});
