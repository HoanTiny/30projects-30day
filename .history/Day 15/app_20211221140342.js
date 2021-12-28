const products = document.querySelector(".products");
const filter = document.getElementById("filter");
const listItems = [];

// getData();

// filter.addEventListener("input", (e) => filterData(e.target.value));

dtaa();
function dtaa() {
    const urlApi = "https://fakestoreapi.com/products";
    fetch(urlApi).then((response) => {
        response.json();
    });
    products.innerHTML = "";
    response.forEach((respons) => {
        const div = document.createElement("div");
        div.setAttribute("class", "product");
        listItems.push(div);

        div.innerHTML = `
			<img src="${respons.image}" alt="">
			<div class="product-detail">
				<h4>${respons.title.slice(0, 30)}</h4>
				<p>$${respons.price}</p>
			</div>
        `;

        products.appendChild(div);
    });
}

// async function getData() {
//     const res = await fetch("https://fakestoreapi.com/products");

//     const results = await res.json();

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

// function filterData(search) {
//     listItems.forEach((item) => {
//         if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
//             item.classList.remove("hide");
//         } else {
//             item.classList.add("hide");
//         }
//     });
// }
