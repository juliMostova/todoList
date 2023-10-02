const inputTask = document.querySelector('#newTask_input'),
       submitTask = document.querySelector('#new-task-submit'),
       tasks = document.querySelector('#tasks');


       submitTask.addEventListener('click',(e)=>{
e.preventDefault();
let inpVal = inputTask.value;

if(inpVal === ""){
    alert('You need to type something');
    return;
}

let html = "";
html =  `
<div class="task">
<div class="content">
<input type="text" class="text" value="${inpVal}" readonly>
</div>
<button class="edit">edit</button>
<button class="delete">delete</button>
</div>
`;
tasks.insertAdjacentHTML('beforeend',html);

inputTask.value = "";


let delBtn = document.querySelectorAll('.delete');

for(let i=0;i<delBtn.length;i++){
    delBtn[i].addEventListener('click',function(){
this.parentNode.remove();
    });
}





       });
     