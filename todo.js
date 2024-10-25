const taskform = document.getElementById("taskform");
const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");

loadata()

taskform.addEventListener("click", event =>{

    event.preventDefault();

    const tasks = taskinput.value.trim();
    if(tasks){
        createElement(tasks)
        taskinput.value = ""
        savedate()
    }
    else{
        display("Please Enter the task!!")
    }

});

function display(messege){
    const errordisplay = document.createElement("h1");
    errordisplay.textContent = messege
    tasklist.appendChild(errordisplay)

    setTimeout(() => {
        tasklist.removeChild(errordisplay)
    }, 1000);
}

function createElement(tasks){
    const displaylist = document.createElement("li");
    displaylist.textContent = tasks;
    displaylist.classList.toggle('list')

    const deletebtn = document.createElement("Button")
    deletebtn.textContent = 'delete'
    deletebtn.classList.toggle("buttonbtn")
    
    displaylist.appendChild(deletebtn)
    tasklist.appendChild(displaylist)

    deletebtn.addEventListener("click", event =>{
        tasklist.removeChild(displaylist)
    })
}

function savedate(){
    let task = []
    tasklist.querySelectorAll("li").forEach( item =>{
        task.push(item.textContent.replace("delete", "").trim())
    })
    localStorage.setItem("task", JSON.stringify(task))
}

function loadata(){
    const task = JSON.parse(localStorage.getItem("task")) || [];
    task.forEach(createElement)
}