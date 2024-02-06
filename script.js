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
  // console.log("første json element", itemJSON[0]);

  let itemClone;

  itemJSON.forEach((item) => {
    console.log("item", item);
    itemClone = itemTemplate.cloneNode(true).content;
    itemClone.querySelector("a").href = `produkt.html?id=${item.id}`;
    itemClone.querySelector(
      ".item_image"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${item.id}.webp`;
    itemClone.querySelector(".item_image").alt = `picture of a ${item.name}`;

    itemClone.querySelector(".item_productdisplayname").textContent =
      item.productdisplayname;
    itemClone.querySelector(".item_price").textContent = item.price + " kr";

    itemClone.querySelector(".item_gender").textContent = item.gender;
    // itemClone.querySelector(.item_image).

    if (item.soldout === 1) {
      itemClone
        .querySelector("div .item_info_udsolgt")
        .classList.remove("hide");
    }
    if (item.discount) {
      itemClone.querySelector(".item_info_sale").classList.remove("hide");
      itemClone.querySelector(".item_info_sale").textContent =
        item.discount + "%";
    }
    itemContainer.appendChild(itemClone);
  });
}
