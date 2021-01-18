document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let newTaskForm = document.querySelector("form#create-task-form")
let taskUl = document.querySelector("ul#tasks")

newTaskForm.addEventListener("submit", function(event){
  event.preventDefault()
  let userInput = event.target["new-task-description"]
  let whatTheUserTyped = userInput.value 

  let blankLi = document.createElement("li")
  blankLi.innerText = whatTheUserTyped
  taskUl.append(blankLi)

  blankLi.addEventListener("contextmenu", function(e){
    e.preventDefault()
    blankLi.remove()
  })
  
})


