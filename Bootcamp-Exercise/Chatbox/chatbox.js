let div=document.getElementById("pas");
let input=document.getElementById("sendmessage");
function appendchild(){
    let div=document.createElement("div");
    let test=document.getElementById("chatbox");
    let test2=document.createElement("span");
    test2.innerText="hisdadfcafasasasas";
    test2.style.fontSize="30px";
    div.style.padding="20px";
    div.style.width="40%";
    div.style.backgroundColor="blue";
    div.style.marginLeft="48%";
    div.style.borderRadius="20px 20px 0px 20px";
    div.appendChild(test2);
    test2.style.marginTop="30px";
    test.appendChild(div);
    test.appendChild(document.createElement("br"));
}
function sendmessage(){
    div.innerText=input.value;
}