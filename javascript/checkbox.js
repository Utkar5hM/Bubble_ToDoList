document.addEventListener("DOMContentLoaded", ()=>{
    let item = document.getElementsByClassName("checkbox")[0];
    // get items in loop after this call
    let checkbox = document.getElementById("checkbox");
    item.addEventListener("click" , (e)=>{
        item.classList.toggle("checked");
        checkbox.checked = !checkbox.checked;
    })

});