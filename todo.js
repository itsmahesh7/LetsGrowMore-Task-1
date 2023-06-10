const ipbox=document.getElementById('input-box');
const listcontainer=document.getElementById('list-container');

function addTask(){
    if(ipbox.value=== ""){
        alert("You must enter something..!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=ipbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ipbox.value="";
    saveData();
}

listcontainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();