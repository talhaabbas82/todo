function addTodo(){
    let todotext = document.getElementById("text").value;
    let result = document.getElementById("result");
    
   if(todotext === ""){
    alert("please fill the task");
    return;
   }   
   
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let text = document.createTextNode(todotext);
    

    let editBtn = document.createElement("button");
    let buttonText = document.createTextNode("edit");
    editBtn.appendChild(buttonText);

     
    editBtn.addEventListener("click",() =>{
        console.log("hello world!",todotext);
        li.style.color = "green";
        li.style.fontWeight = "bold";
        
    })
    


    let delbtn = document.createElement("button");
    let deletext = document.createTextNode("delete");
    delbtn.appendChild(deletext);

     delbtn.addEventListener("click",()=>{
        ul.remove();
    })

   
    
    
    li.appendChild(text);
    ul.appendChild(li);  
    result.appendChild(ul);
    li.appendChild(delbtn);
    li.appendChild(editBtn)


    
      document.getElementById("text").value = "";

}
  
