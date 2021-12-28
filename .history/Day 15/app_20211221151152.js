const products = document.querySelector(".products");
const filter = document.getElementById("filter");
const listItems = [];

// getData();

// filter.addEventListener("input", (e) => filterData(e.target.value));

function getKpi() {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => getdata(data));
}
getKpi();

function getdata(datas) {
    products.innerHTML = "";
    datas.forEach((product) => {
        const div = document.createElement("div");
        div.setAttribute("class", "product");
        listItems.push(div);

        div.innerHTML = `
        			<img src="${product.image}" alt="">
        			<div class="product-detail">
        				<h4>${product.title.slice(0, 30)}</h4>
        				<p>$${product.price}</p>
        			</div>

                `;

        products.appendChild(div);
    });
}

function filterDt() {
    filter.addEventListener("input", function (e) {
        listItems.filter(function (item) {
            if (e.target.value === item.innerText.toLowerCase().includes(e.target.value)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
}

filterDt();

// function filterData(search) {
//     listItems.forEach((item) => {
//         if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
//             item.classList.remove("hide");
//         } else {
//             item.classList.add("hide");
//         }
//     });
// }

// async function getData() {
//     const res = await fetch("https://fakestoreapi.com/products");

//     const results = await res.json();
//     console.log(results[1].title);

//     // Clear products
//     products.innerHTML = "";

//     results.forEach((product) => {
//         const div = document.createElement("div");
//         div.setAttribute("class", "product");
//         listItems.push(div);

//         div.innerHTML = `
// 			<img src="${product.image}" alt="">
// 			<div class="product-detail">
// 				<h4>${product.title.slice(0, 30)}</h4>
// 				<p>$${product.price}</p>
// 			</div>
//         `;

//         products.appendChild(div);
//     });
// }
