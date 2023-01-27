let crr = [
  {
    img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/12698043-1604891248779334.jpg",
    pro_name: "RéVive Rescue Elixir Anti-Aging Oil 30ml",
    rating: "⭐⭐⭐⭐",
    price: "49.99",
  },
  {
    img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11370303-1074944341868735.jpg",
    pro_name: "EltaMD UV Clear Broad-Spectrum SPF46",
    rating: "⭐⭐⭐⭐⭐",
    price: "29.99",
  },
  {
    img: "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12380167-1704833225775098.jpg",
    pro_name: "ARCONA Cerise+C Barrier Repair Oil 15ml",
    rating: "⭐⭐⭐⭐⭐",
    price: "40.99",
  },
  {
    img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289690-1794871029936020.jpg",
    pro_name: "SkinMedica Ultra Sheer Moisturizer (2oz)",
    rating: "⭐⭐⭐⭐⭐",
    price: "102.99",
  },
];

// console.log(crr)

let data = document.querySelector("#cartmp");

function display() {
  crr.forEach((el) => {
    let div = document.createElement("div");
    data.append(div);

    let im = document.createElement("img");
    im.src = el.img;

    let nm = document.createElement("h3");
    nm.innerHTML = el.pro_name;

    let off_btn = document.createElement("h5");
    off_btn.innerHTML = " 25% off with code SINGLES";

    let rat = document.createElement("p");
    rat.innerHTML = el.rating;

    let price = document.createElement("h2");
    price.innerHTML = "$" + el.price;

    let sh_btn = document.createElement("button");
    sh_btn.innerHTML = "BUY";

    div.append(im, nm, off_btn, rat, price, sh_btn);
  });
}

display();
document.querySelector("#spnss").innerHTML = localStorage.getItem("count") || 0;

function delete_data(data, index) {
  data.splice(index, 1);
  localStorage.setItem("Cart", JSON.stringify(data));
  display(data);
}

let count = localStorage.getItem("count") || 0;
let cart_pro = JSON.parse(localStorage.getItem("Cart")) || [];
console.log(cart_pro);

let yrcrt = document.querySelector("#your_cart");
let lsdata = JSON.parse(localStorage.getItem("Carts")) || [];

function cartplay() {
  cart_pro.forEach((el, index) => {
    let card_cart = document.createElement("div");

    let imdiv = document.createElement("div");

    let im = document.createElement("img");
    im.src = el.img;
    imdiv.append(im);

    let cartp = document.createElement("div");

    let nm = document.createElement("h1");
    nm.innerHTML = el.pro_name;

    let off_btn = document.createElement("h5");
    off_btn.innerHTML = " 25% off with code SINGLES";

    let rate = document.createElement("p");
    rate.innerHTML = el.rating;

    let price = document.createElement("h2");
    price.innerHTML = "$" + el.price;

    let hr = document.createElement("hr");
    hr.style.width = "80%";

    let sh_btn = document.createElement("button");
    sh_btn.innerHTML = "QUICK BUY";

    sh_btn.addEventListener("click", function () {
      count++;
      document.querySelector("span").innerHTML = count;

      localStorage.setItem("count", count);

      lsdata.push(el);

      let ls = localStorage.setItem("Carts", JSON.stringify(lsdata));
      console.log(ls);
      // location.href = "./pay/payment.html";
    });

    let de_btn = document.createElement("button");
    de_btn.innerHTML = "DELETE";
    de_btn.setAttribute("class", "del");

    de_btn.addEventListener("click", function () {
      delete_data(cart_pro, index);

      count--;
      document.querySelector("span").innerHTML = count;
      localStorage.setItem("count", count);
    });

    cartp.append(nm, off_btn, rate, price, hr, sh_btn, de_btn);

    card_cart.append(imdiv, cartp);
    your_cart.append(card_cart);
  });
}
let total = cart_pro.reduce((acc, elem) => {
  return acc + Number(elem.price);
}, 0);
document.querySelector(".amnt").innerHTML = total.toFixed(2);

cartplay();

// let count= localStorage.getItem('count') || 0
// document.querySelector('.span1').innerHTML=count
