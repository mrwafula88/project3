
const taskform = document.querySelector(".taskform");
const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("addlist");


loadata()

taskform.addEventListener("click", event =>{

    event.preventDefault()

    const task = taskinput.value.trim();
    
    if(task){
        createtaskelement(task);
        taskinput.value = "";
        savedate()    
        
    }
    
    else{
        display("please enter task!!!!!")
    }
});

function display(messege){
    const errordisplay = document.createElement("h1");
    errordisplay.textContent = messege;
    tasklist.appendChild(errordisplay)

    setTimeout(() => {
        tasklist.removeChild(errordisplay)
    }, 1000);

}
function createtaskelement(task){
    const newelement = document.createElement("li");
    newelement.textContent = task
    tasklist.appendChild(newelement)

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.classList.toggle("buttbtn")
    newelement.appendChild(deletebtn)
    

    deletebtn.addEventListener("click", event =>{
        tasklist.removeChild(newelement)
        savedate()
    })

}
function savedate(){
    let tasks = [];
    tasklist.querySelectorAll("li").forEach((item) => {
        tasks.push(item.textContent.replace("delete", "").trim());
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function loadata(){

    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach(createtaskelement);
}
