 var password=document.querySelector("#txtpass");
 var check=document.querySelector("#shows");
 check.addEventListener('click',function(){
var type =password.getAttribute("type")=="password"?"text":"password";
password.setAttribute("type",type)
});