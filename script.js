window.addEventListener("DOMContentLoaded", init);

const itemURL = "https://kea-alt-del.dk/t7/api/products?limit=50&start=10";

let itemTemplate;
let itemContainer;

function init() {
  console.log("init");

  itemTemplate = document.querySelector(".card_template");
  console.log("itemTemplate", itemTemplate);

  itemContainer = document.querySelector(".card_container");
  console.log("itemContainer", itemContainer);

  fetch(itemURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showItems(json);
    });
  // Til her
}

function showItems(itemJSON) {
  console.log("første json element", itemJSON[0]);

  let itemClone;

  itemJSON.forEach((item) => {
    console.log("item", item);
    itemClone = itemTemplate.cloneNode(true).content;
    // itemClone.querySelector(".item_image").src = item.image_url;
    // itemClone.querySelector(".item_image").alt = "picture of a ${item.name}";
    itemClone.querySelector(".item_productdisplayname").textContent =
      item.productdisplayname;
    itemClone.querySelector(".item_price").textContent = item.price;
    itemClone.querySelector(".item_gender").textContent = item.gender;
    itemContainer.appendChild(itemClone);
  });
}
