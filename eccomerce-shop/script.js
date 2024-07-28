import featured from './data/featured.json' with {type: "json"};

const navbar = document.querySelector("nav");
const mButton = document.querySelector("#menu-button");
const fContainer = document.querySelector("#featured-container");

mButton.addEventListener("click", () => {
    navbar.classList.toggle("menu-visible");
});

featured.data.map(e => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let rate = document.createElement("span");
    let price = document.createElement("p");
    let coin = document.createElement("span");

    div.classList.add("product-card");
    div.classList.add("translate-y");
    title.textContent = e.name;

    console.log(rate.textContent.length);

    img.src = e.img;

    while (rate.textContent.length < 5) {
        if (rate.textContent.length < e.rate) {
            rate.textContent += String.fromCharCode(9733);
        } else {
            rate.textContent += String.fromCharCode(9734);
        }
    }

    price.textContent = `${e.price} `;
    coin.textContent = e.coin;
    price.appendChild(coin);

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(rate);
    div.appendChild(price);

    fContainer.appendChild(div);
});