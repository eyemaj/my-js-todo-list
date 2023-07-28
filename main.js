const inputText = document.getElementById("input-a-task");
const containerList = document.getElementById("container-for-tasks");
// const response = confirm("Are you sure you want to delete?")

// Add task by pressing the Enter key on keyboard
const enterByKey = document.getElementById("input-a-task");
enterByKey.addEventListener("keypress", function onEvent(event){
    if (event.key === "Enter") {
        addTask();
    }
});

//Enter task in container
function addTask(){
    if(inputText.value === ''){
        alert("Please type a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        containerList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    inputText.focus();
    
    storeTheData();
}

//Toggle between checking and unchecking task and/or delete
containerList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
        // inputText.focus()
        storeTheData();
    }
    else if (e.target.tagName === "SPAN"){
        let text = "Are you sure you want to delete?";
        if (confirm(text) == true) {
        e.target.parentElement.remove();
    }
        inputText.focus();
        storeTheData();
    }
}, false);

//Store task in local storage 
function storeTheData(){
    localStorage.setItem("data", containerList.innerHTML);
}

function showTask(){
    containerList.innerHTML = localStorage.getItem("data");
}

showTask();

