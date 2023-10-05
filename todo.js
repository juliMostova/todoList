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

  // let html = "";
  // html =  `
  // <div class="task">
  // <div class="content">
  // <input type="text" class="text" value="${inpVal}"readonly>
  // </div>
  // <button class="edit">edit</button>
  // <button class="delete">delete</button>
  // </div>
  // `;

  // tasks.insertAdjacentHTML('beforeend',html);

  let storage = [];

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
    tasks.appendChild(taskDiv);

// storage.push(tasks)
//     localStorage.setItem('storage',JSON.stringify(storage));

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
