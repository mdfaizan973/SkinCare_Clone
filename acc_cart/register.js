document.addEventListener("submit", signup);

function signup(event){
    event.preventDefault(); 
   let name= document.querySelector("#name").value
   let email= document.querySelector("#email").value
   let pass=  document.querySelector("#pass").value
   let num=  document.querySelector("#num").value
   let add=  document.querySelector("#add").value


//    console.log(name)


   let user = {
    name: name, 
    email: email, 
    pass: pass,
    num:num,
    add:add
   } 
    console.log(user)

    if(name=='' ||email=='' ||pass=='' || num=='' ||add==''){
alert('You are missing somthing ❌')
}
   else{
    localStorage.setItem('user' ,JSON.stringify(user));

location.href = '../acc_cart/acc.html';

alert('Created Account Successfully')
   }



}