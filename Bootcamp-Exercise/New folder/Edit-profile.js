let avatar_edit=document.getElementById("avatar-edit");
let avatar=document.getElementById("Avatar");
avatar_edit.onchange=function(){
   avatar.src=URL.createObjectURL(avatar_edit.files[0]);
}