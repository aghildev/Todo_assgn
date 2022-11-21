const formEl = document.querySelector("form");

let input = document.getElementById("input");

const lists = document.querySelector(".todo-list");

let msg = document.getElementById("msg");

let posts = document.getElementById("posts");
let newTodo = document.querySelector("#posts div")

// const listItem = document.querySelector(".listItem")

// const highPriorityEl = document.querySelector("#red");
// let lowPriorityEl = document.querySelector("#yellow");

// const searchEl = document.querySelector("#search")

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});


let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "todo cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};


let data = {};

let acceptData = (e) => {
    data["text"] = input.value;
    //data.push(input.value);
    console.log(data);
    createTodo()


};

let createTodo = (e) => {
    posts.innerHTML += `

  
<div >
 
      <p class= "main">${data.text}</p>
  
      <span class="options">
        <i onClick="editTodo(this)" class="fas fa-edit"></i>
        <i onClick="deleteTodo(this)" class="fas fa-trash-alt"></i>
        <span id="yellow" onClick="changeYellow(this)">Make Moderate Priority</span>
        <span id = "red" onClick="changeRed(this)">Make High Priority</span>
      </span>
    </div>
   
    `;
    input.value = "";

};

let deleteTodo = (e) => {
    e.parentElement.parentElement.remove();
};

let editTodo = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let changeYellow = (e) => {
    //console.log(e.parentElement.parentElement)
    e.parentElement.parentElement.style.backgroundColor = "yellow"
}


let changeRed = (e) => {
    e.parentElement.parentElement.style.backgroundColor = "red"
}



let showRed = (e) => {
    //console.log(e)


    //e.preventDefault();
    const col = Array.from(e.parentElement.nextElementSibling.children);
    //console.log(Array.from(col))
    col.forEach((el) => {
        if (el.style.backgroundColor == "yellow") {
            //console.log("present")
            el.style.display = "none";
        }
        if(el.style.backgroundColor == "red") {
            el.style.display = "flex";
        }
    })

}

let showYellow = (e) => {
    //console.log(e)
    const col = Array.from(e.parentElement.nextElementSibling.children);
    //console.log(Array.from(col))
    col.forEach((el) => {
        if (el.style.backgroundColor == "red") {
            //console.log("present")
            el.style.display = "none";
        }
        if(el.style.backgroundColor == "yellow") {
            el.style.display = "flex";
        }
    })
}
