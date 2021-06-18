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
    checkBoxToDo.classList.add("checkBoxToDoCss");
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

let addform = document.querySelector("#addtdform");
addform.addEventListener('submit',function (e){
    e.preventDefault();
    let TodoAddObj = {
        text: `${addform.elements.textToDo.value}`,
        check:false
    }
    toDoList.push(TodoAddObj);
    dtdl.appendChild(createToDo(TodoAddObj));
})

let todoitems = document.querySelectorAll(".toDoItems");
for( i in todoitems){
    let btn =document.querySelector("button");
    btn.addEventListener('click', function(){    
            toDoList.splice(i,1);
            dtdl.removeChild(dtdl.children[i]);
        })
}