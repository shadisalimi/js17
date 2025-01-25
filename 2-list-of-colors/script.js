
function listOfColours(colours) {
  // Write your code here...
  const div=document.querySelector("#content")
  const p=document.createElement("p")
  p.innerText="the colour is..."
  div.append(p)
  const select=document.createElement("select")
  div.append(select)

  colours.forEach(element => {
    const option=document.createElement("option")
    option.innerHTML=element

    select.append(option)
  });

select.addEventListener("change",(e)=>{
  p.style.color=e.target.value
})


 div.append(select)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
