console.log("cool dawg");
// const urlParams = new URLSearchParams(window.location.search);
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}
// const temp = document.querySelector("templalte").content;
// const parent = document.querySelector("section");

function visProdukt(produkt) {
  //   console.log(data[0]);
  document.querySelector("h2").textContent = produkt.productdisplayname;
  document.querySelector("h3").innerHTML = produkt.description;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = produkt.productdisplayname;
}

getProduct();
