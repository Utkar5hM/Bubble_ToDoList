let toDoList = [{
    text: "lorem ipsum dolor baki ka yadh nhi",
    check: true,
    deleted:false
},{
    text: "petition to rename Anas Aijaz to Anaz Aijas",
    check: false,
    deleted:false
}
];
//dtdl is the DOm element for the ul.
let dtdl = document.querySelector("#tdlist");
let todoitems = document.querySelectorAll(".toDoItems");
//adding all the existing todos
for(i in toDoList){
    if(toDoList[i].deleted==false){
    dtdl.appendChild(createToDo(toDoList[i]));
    } else {
        dtdl.appendChild(createToDo(toDoList[i]));
        todoitems = document.querySelectorAll(".toDoItems");
        todoitems[i].style.display = "none";
    }
}

//function for creating to dos.
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
todoitems = document.querySelectorAll(".toDoItems");

//event for adding to dos.
addform.addEventListener('submit',function (e){
    e.preventDefault();
    let TodoAddObj = {
        text: `${addform.elements.textToDo.value}`,
        check:false,
        deleted:false
    }
    toDoList.push(TodoAddObj);
    dtdl.appendChild(createToDo(TodoAddObj));
    addform.elements.textToDo.value="";
    //For Reassigning Event listener since elements are Changed.
    todoitems = document.querySelectorAll(".toDoItems");
    btn = document.querySelectorAll(".btnToDo"); 
    checkBoxes =  document.getElementsByClassName("checkBoxToDo");
    let j =toDoList.length;
    btn[j-1].addEventListener('click', function(){    
        todoitems[j-1].style.display = "none";
        toDoList[j-1].deleted=true;
    })
    checkBoxes[j-1].addEventListener('change', function() {
        toDoList[j-1]["check"]= checkBoxes[j-1].checked;
    });
})
updatebtn();
updateCb();



function updatebtn(){
    todoitems = document.querySelectorAll(".toDoItems");
    btn = document.querySelectorAll(".btnToDo"); 
    //new listeners 
    for(let i =0; i < btn.length; i++){
        btn[i].addEventListener('click', function(){    
                todoitems[i].deleted=true;
                toDoList[i].deleted=true;
                todoitems[i].style.display = "none";
            })
    }
}
function updateCb(){
    checkBoxes =  document.getElementsByClassName("checkBoxToDo");
    for(let j = 0 ; j < checkBoxes.length; j++){
        checkBoxes[j].addEventListener('change', function() {
                toDoList[j]["check"]= checkBoxes[j].checked;
        });
    } 
}