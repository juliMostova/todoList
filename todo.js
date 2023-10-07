window.addEventListener('load',()=>{

 let todos = JSON.parse(localStorage.getItem("todo-list"));

    const inputTask = document.querySelector("#newTask_input"),
    submitTask = document.querySelector("#new-task-submit"),
    tasks = document.querySelector("#tasks");
  
  submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    
    let inpVal = inputTask.value;



    if (inpVal === "") {
      alert("You need to type something");
      return;
    }
  
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
      tasks.appendChild(taskDiv);
  
  
    let taskContent = document.createElement("div");
    taskContent.classList.add("content");
    taskDiv.appendChild(taskContent);
  
    let inputText = document.createElement("input");
    inputText.classList.add("text");
    inputText.value = inpVal;
    inputText.type = "text";
    inputText.setAttribute("readonly", "readonly");
  
    taskContent.appendChild(inputText);
  
    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerText = "Del";
    taskDiv.appendChild(del);
  
    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit";
    taskDiv.appendChild(edit);
  
    inputTask.value = "";


       
    let delBtn = document.querySelectorAll(".delete");
  
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener("click", function () {
        this.parentNode.remove();
       
      });
    }
  
    localStorage.setItem("todo-list", JSON.stringify(todos))

    let editBtn = document.querySelectorAll(".edit");
  
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].addEventListener("click", function () {
        if (editBtn[i].innerText.toLowerCase() === "edit") {
          editBtn[i].innerText = "Save";
          inputText.removeAttribute("readonly");
          inputText.focus();

          
        
        } else {
          inputText.setAttribute("readonly", "readonly");
          editBtn[i].innerText = "edit";
        }
      });
      
  
    }

   
  });
  



});






