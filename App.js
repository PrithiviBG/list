function Add (){
    var ul = document.getElementById("here");
    var input=document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute("id" , input.value);
    li.appendChild(document.createTextNode)(input.value);
    ul.appendChild(li);
    input.value= "";

}
function Edit(){
    var ul = document.getElementById("here");
    var input=document.getElementById("list");
    ul.editchild(list);
    input.value= "";
}
function Delete(){
    var ul = document.getElementById("here");
    var input=document.getElementById("list");
    ul.Deletechild(list);
    input.value= "";
}