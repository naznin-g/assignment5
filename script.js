let heartCount=0;
let coinCount=100;
let copyCount=0;
const heartDisplay=document.getElementById("heart-count");
const coinDisplay=document.getElementById("coin-count");
const copyDisplay=document.getElementById("copy-count");
const historyList=document.getElementById("history-list");
const clearHistoryButton=document.getElementById("clear-history");


document.querySelectorAll(".heart-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        
            heartCount++;
        heartDisplay.textContent=heartCount;
    });
});
document.querySelectorAll(".call-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const card=btn.closest(".card");
        const serviceName=card.querySelector(".card-title").textContent;
        const number=card.querySelector(".number").textContent;
        if (coinCount<20){
            alert("Not enough coins! you need at least 20 coins to make a call");
            return;
        }
        else{
    coinCount-=20;}
coinDisplay.textContent=coinCount;
alert(`Calling ${serviceName} (${number})`);
const li= document.createElement("li");
const time=new Date().toLocaleTimeString();
li.innerHTML=`<div class="flex justify-between items-center">
<div class="flex flex-col">${serviceName}<br>
  ${number}</div>
<div>${time}</div></div>`;
li.classList.add("m-2","p-2");
historyList.appendChild(li);
    });
});