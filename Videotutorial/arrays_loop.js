let array=[];
function addtoarray(){
    let elements=document.querySelector('.input');
    array.push(elements.value);
    elements.value='';
}
let string="";
function outputboard(){
    document.querySelector('.output').innerHTML='';
    for(let i =0;i<array.length;i++){
        document.querySelector('.output').innerHTML+=`<p>${array[i]}</p>`;
    }
}
