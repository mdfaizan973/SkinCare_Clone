let cart_pro = JSON.parse(localStorage.getItem("Cart")) || [];
// console.log(cart_pro)

let total = cart_pro.reduce((acc, elem) => {
  return acc + Number(elem.price);
}, 0);

//   console.log(total)
document.querySelector(".span2").innerHTML = total.toFixed(1);

// let count= localStorage.getItem('count') || 0
// document.querySelector('.span1').innerHTML=count

//   console.log(count)
// document.addEventListener("submit", pay);

// function pay(event){
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

document.querySelector("button").addEventListener("click", () => {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let name = document.querySelector("#name").value;
  let pin = document.querySelector("#pin").value;
  let add = document.querySelector("#add").value;
  let num = document.querySelector("#num").value;
  let card = document.querySelector("#card").value;
  let success = document.createElement("img");
  let load = document.createElement("img");
  let div = document.createElement("div");
  swal(" Your payment is succsful");
  let payment = {
    email: email,
    name: name,
    pin: pin,
    add: add,
    num: num,
    card: card,
  };
  // console.log(payment)

  if (
    email == "" ||
    name == "" ||
    pin == "" ||
    add == "" ||
    num == "" ||
    card == ""
  ) {
    swal("You are missing somthing");

    let cc = (document.querySelector(".ani").innerHTML = "");
  } else {
    localStorage.setItem("user", JSON.stringify(payment));

    user = "";
    document.querySelector(".ani").innerHTML = null;
    setTimeout(() => {
      success.src = "https://media.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif";
      div.append(success);
      //   div.style.margin='10px 0'
      document.querySelector(".ani").append(div);
      document.querySelector(".sh").innerHTML =
        "Payment Successful of $" + total;
      load.src = "";

      audio.play();
    }, 3000);
  }
});
