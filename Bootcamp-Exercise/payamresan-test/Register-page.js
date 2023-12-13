let telephone=document.getElementById("telephone");
let password=document.getElementById("password");
let password2=document.getElementById("confirmed-pas");
function validation(){
    if(telephone.validity.valid===true&&password.validity.valid===true&&password2.validity.valid===true){
        document.getElementById("sabtenam").style.backgroundColor="rgb(255, 196, 54)";
        document.getElementById("sabtenam").disabled=false;
    }
    else{
        document.getElementById("sabtenam").style.backgroundColor="rgba(255, 196, 54,30%)";
        document.getElementById("sabtenam").disabled=true;
    }
}