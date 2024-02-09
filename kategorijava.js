// console.log("cool dawg");
// // const urlParams = new URLSearchParams(window.location.search);
// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("categories");
// const url = `https://kea-alt-del.dk/t7/api/categories`;

// function getKategori() {
//   fetch(url)
//     .then((res) => res.json())
//     .then(visKategori);
// }
// // const temp = document.querySelector("templalte").content;
// // const parent = document.querySelector("section");

// function visKategori(kategori) {
//     console.log(data[0]);
//   document.querySelector(".kat_text").textContent = kategori.category;
//   //   document.querySelector("h3").innerHTML = kategori.description;
//   //   document.querySelector(
//   //     "img"
//   //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
//   //   document.querySelector("img").alt = produkt.productdisplayname;
// }

// getProduct();

window.addEventListener("DOMContentLoaded", init);

const itemURL = "https://kea-alt-del.dk/t7/api/categories";
// const params = new URLSearchParams(window.location.search);
// const category = params.get("category");

let itemTemplate;
let itemContainer;

function init() {
  console.log("init");

  itemTemplate = document.querySelector(".kategori_template");
  console.log("itemTemplate", itemTemplate);

  itemContainer = document.querySelector(".kategori_container");
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
    itemClone.querySelector(
      "a"
    ).href = `produktliste.html?category=${item.category}`;

    itemClone.querySelector(".kat_text").textContent = item.category;

    itemContainer.appendChild(itemClone);
  });
}
