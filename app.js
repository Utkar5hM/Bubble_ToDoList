let toDoList = [{
    text: "lorem ipsum dolor baki ka yadh nhi",
    check: true
},{
    text: "petition to rename Anas Aijaz to Anaz Aijas",
    check: false
}
];
let dtdl = document.querySelector("#tdlist");
for(i in toDoList){
    dtdl.appendChild(createToDo(toDoList[i]));
}

function createToDo(tdobj){
    let litd = document.createElement("li");
    litd.classList.add('toDoItems');
    //checkbox with class checkBoxToDoCss
    let checkBoxToDo = document.createElement("INPUT");
    checkBoxToDo.classList.add("checkBoxToDo");
    checkBoxToDo.setAttribute("type", "checkbox");
    checkBoxToDo.checked = tdobj.check;
    litd.appendChild(checkBoxToDo);
    //text
    let txt = document.createElement("span");
    txt.innerText =tdobj.text;
    txt.classList.add("txtToDoCss");
    litd.appendChild(txt);
    //delete Todoitem button
    let deleteToDo = document.createElement("button");
    deleteToDo.classList.add("btnToDo");
    deleteToDo.innerText = 'X';
    litd.appendChild(deleteToDo);
    return litd;
}

let btn =document.querySelectorAll(".btnToDo"); 
let checkBoxes =  document.getElementsByClassName("checkBoxToDo");
let addform = document.querySelector("#addtdform");
let todoitems = document.querySelectorAll(".toDoItems");

addform.addEventListener('submit',function (e){
    e.preventDefault();
    let TodoAddObj = {
        text: `${addform.elements.textToDo.value}`,
        check:false
    }
    toDoList.push(TodoAddObj);
    dtdl.appendChild(createToDo(TodoAddObj));

    //For Reassigning Event listener since elements are Changed.
    btn = document.querySelectorAll(".btnToDo"); 
    updatebtn();
    updateCb();
})
updatebtn();
updateCb();



function updatebtn(){
    todoitems = document.querySelectorAll(".toDoItems");
    btn = document.querySelectorAll(".btnToDo"); 
    for(let i = 0 ; i < btn.length; i++){
        btn[i].removeEventListener('click',function(){
        });
    } 
    for(let i = 0 ; i < btn.length; i++){
        btn[i].addEventListener('click', function(){    
                toDoList.splice(i,1);
                todoitems[i].remove();
                updateCb();
            })
    }
}
function updateCb(){
    for(let i = 0 ; i < checkBoxes.length; i++){
        checkBoxes[i].removeEventListener('change',function(){
        });
    } 
    checkBoxes =  document.getElementsByClassName("checkBoxToDo");
    for(let i = 0 ; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener('change', function() {
                toDoList[i]["check"]= checkBoxes[i].checked;
        });
    } 
}