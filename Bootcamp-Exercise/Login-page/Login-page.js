function visibility1(){
    document.getElementById("Login-div").style.visibility="hidden";
    document.getElementById("Register-div").style.visibility="visible";
    document.getElementById("Register-div").style.left="50%";
}
function visibility2(){
    document.getElementById("Login-div").style.visibility="visible";
    document.getElementById("Register-div").style.visibility="hidden";
    document.getElementById("Register-div").style.left="20%";
}
function check(){
    let check1=document.getElementById("Password-input-Rgr").value;
    check1=check1.trim();
    document.getElementById("Password-input-Rgr").value=check1;
    console.log(check);
    let check2=JSON.stringify(check1);
    if(check2.length>6){
        document.getElementById("p1").style.color="green";
        document.getElementById("img-d1").style.backgroundColor="green";
    }
    else{
        document.getElementById("p1").style.color="tomato";
        document.getElementById("img-d1").style.backgroundColor="tomato";
    }
    if(check2.length<11&&check2.length>7){
        document.getElementById("p2").style.color="green";
        document.getElementById("img-d2").style.backgroundColor="green";
    }
    else{
        document.getElementById("p2").style.color="tomato";
        document.getElementById("img-d2").style.backgroundColor="tomato";
    }
    if(check2.match(/[0-9]/i)){
        document.getElementById("p3").style.color="green";
        document.getElementById("img-d3").style.backgroundColor="green";
    }
    else{
        document.getElementById("p3").style.color="tomato";
        document.getElementById("img-d3").style.backgroundColor="tomato";
    }
    if(check2.match(/[/[`~!@#\$%\^&\*\(\)\-=_+\\\[\]{}/\?,\.\<\>]/i)){
        document.getElementById("p4").style.color="green";
        document.getElementById("img-d4").style.backgroundColor="green";
    }else{
        document.getElementById("p4").style.color="tomato";
        document.getElementById("img-d4").style.backgroundColor="tomato";
    }
}