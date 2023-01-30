document.addEventListener("submit", signin);

function signin() {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem("user"));

  // console.log(userData);

  let loginEmail = document.querySelector("#email").value;

  let password = document.querySelector("#password").value;

  if (loginEmail === userData.email) {
    if (password === userData.pass) {
      swal("Signin Successfull 👍");
      alert("Signin Successfull 👍");
      location.href = "../index.html";
      // location.href='../HOME/index.html';
    } else {
      alert("Wrong Password ❌  or ❌ Account not found");
      swal("Wrong Password ❌  or ❌ Account not found");
    }
  } else {
    alert("Wrong Credentials ❌ or ❌ Register again");
    swal("Wrong Credentials ❌ or ❌ Register again");
  }
}
