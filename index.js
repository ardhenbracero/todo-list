const btn1 = document.querySelector('.btn1');
const addListInput = document.getElementById('addList');
const out1 = document.getElementById('taskList');
const myForm = document.getElementById('myForm');
const taskItems = document.getElementById('taskItems');
const pendingTask = document.getElementById('pendingTask');
const completedTask = document.getElementById('completedTask');
let numberOfTask = 0;
let totalNumberOfTask = 0;
let numberOfCompletedTasks = 0;




function addTask(){
    const text = addListInput.value.trim();

    if(text !== ''){
       
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-2');
    

    const label = document.createElement('label');
    label.textContent = text;
    label.classList.add('taskLabel');

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    out1.appendChild(listItem);

    addListInput.value = '';


    numberOfTask++;

    totalNumberOfTask++;
    

    }

}



function crossOutText(event){
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;

    if(checkbox.checked){
        label.classList.add('checked');
        numberOfTask--;
    }else{
        label.classList.remove('checked');
        numberOfTask++;
    }

    updateTaskItems();
    
}


function updateTaskItems(){
        
    if(numberOfTask === 0){
        pendingTask.textContent = "No More task";
    }else{
        pendingTask.textContent = numberOfTask + "\n" + "Pending Task, ";
        totalTask.textContent = totalNumberOfTask + "\n" + "Total Task, ";
    }
        completedTask.textContent = (totalNumberOfTask - numberOfTask) + "\n" + "Completed Task"; 

        
       
}

    
    


btn1.addEventListener('click', addTask);

addListInput.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault();
        addTask();
    }

});


taskList.addEventListener('change', crossOutText);




document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.querySelector('.clearBtn');
    clearBtn.addEventListener('click', clearTask);
});


function clearTask(){
    const out1 = document.getElementById('taskList');
    out1.innerHTML = '';

    location.reload();
}




// const activeTasks = [];
// const completedTask = [];

// // active task button 
// document.getElementById('active').addEventListener('click', function(){
//     activeTasks.length = 0;
//     const allTaskList = document.querySelectorAll('#taskList li');
    
//     allTaskList.forEach(function(allTaskList){
//         const checkbox = allTaskList.querySelector('input[type="checkbox"]');
//         if(checkbox && !checkbox.checked){
//             activeTasks.push(allTaskList.textContent.trim());
//         }
//     });

//     const activeTaskDiv = document.getElementById('taskList');
//     activeTaskDiv.innerHTML = "Active Task:<br>" + activeTasks.join('<br>');
// });



// // Completed Task button
// document.getElementById('completed').addEventListener('click', function(){
//     completedTask.length = 0;
//     const allTaskList = document.querySelectorAll('#taskList li');

//     allTaskList.forEach(function(allTaskList){
//         const checkbox = allTaskList.querySelector('input[type="checkbox"]');
//         if(checkbox && checkbox.checked){
//             completedTask.push(allTaskList.textContent.trim());
//         }
//     });

//     const completedTaskDiv = document.getElementById('taskList');
//     completedTaskDiv.innerHTML = "Completed Task:<br>" + completedTask.join('<br>');


// });

