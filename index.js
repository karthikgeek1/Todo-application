const submit = document.getElementById("submit-btn")
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let warn=document.querySelector(".warning")
    const userInput = document.getElementById("user-input").value 
    document.getElementById("user-input").addEventListener("keyup", ()=>{
        warn.classList.remove("active")
        document.getElementById("user-input").style.border="0px"
    })
    const tasks = document.querySelector(".tasks")
    if(userInput){
        let html=`<div class="user-task-container"><input type="text" class="user-task" readonly value="${userInput}">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button><div>`
        tasks.innerHTML+=html
        document.getElementById("user-input").value =""
        let usertask=document.querySelectorAll(".user-task")
        let edit = document.querySelectorAll(".edit")
        let del = document.querySelectorAll(".delete")
        usertask=Array.from(usertask)
        edit=Array.from(edit)
        del=Array.from(del)
        // for(let i=0; i<usertask.length; i++){
            usertask.map((data, i)=>{
                edit[i].addEventListener("click", ()=>{
                    if(edit[i].innerText=="edit"){
                        usertask[i].removeAttribute("readonly")
                        usertask[i].focus()
                        edit[i].style.backgroundColor="green"
                        usertask[i].style.color="yellow"
                        edit[i].innerText="save"
                    }
                    else{
                        edit[i].innerText="edit"
                        edit[i].style.backgroundColor=""
                        usertask[i].style.color=""
                        usertask[i].setAttribute("readonly", "readonly")
                    }
                })
                del[i].addEventListener("click", ()=>{
                    usertask[i].parentElement.remove()
                })
            })
    }
    else{
        warn.classList.add("active")
        document.getElementById("user-input").style.border="2px solid red"
    }
})
