const inputBox = document.querySelector(".header input");
const buttonAdd = document.querySelector(".header button");
const todoList = document.querySelector(".todolist")
const deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        buttonAdd.classList.add("active");
    }else {
        buttonAdd.classList.remove("active");
    }
}

buttonAdd.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        lisArr = [];
    }else{
        lisArr = JSON.parse(getLocalStorage);
    }
    lisArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(lisArr));
    showTask();
}

function showTask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        lisArr = [];
    }else{
        lisArr = JSON.parse(getLocalStorage);
    }
    const number = document.querySelector(".number");
    number.textContent = lisArr.length;
    if(lisArr.length > 0){
        deleteAll.classList.add("active");
    }else{
        deleteAll.classList.remove("active");
    }
    let newLiTag = '';
    lisArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    lisArr = JSON.parse(getLocalStorage);
    lisArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(lisArr));
    showTask();
}

deleteAll.onclick = ()=> {
    lisArr = [];
    localStorage.setItem("New Todo", JSON.stringify(lisArr));
    showTask();
}