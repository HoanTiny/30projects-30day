const foodBtns = document.querySelectorAll(".food-menu button");
const foodList = document.querySelectorAll(".food-item");

foodBtns.forEach(function (btn, index) {
    btn.addEventListener("click", () => {
        const atb = btn.getAttribute("type-food");

        //remove and set active for button
        document.querySelector(".food-menu button.active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.getAttribute("type-food"));

        // Fillter element
        foodList.forEach(function (food, index) {
            if (food.getAttribute("type-food") === atb) {
                food.classList.remove("hide");
            } else if (atb === "all") {
                food.classList.remove("hide");
            } else {
                food.classList.add("hide");
            }
        });
    });
});
