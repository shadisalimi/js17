
function todoList(todos) {
  // Write your code here...
  const div=document.querySelector("#content");
  const ul=document.createElement("ul");

todos.forEach(element => {
  const list=document.createElement("li")
  list.textContent=element.todo

  list.addEventListener("click",(e)=>{
    const list=document.createElement("li")
    list.textContent=element.todo
    if(e.target.style.textDecoration === "line-through"){
      e.target.style.textDecoration ="none"
    }else{
      e.target.style.textDecoration ="line-through"
    }
  })
  ul.appendChild(list)
});

  div.appendChild(ul)

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);