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
coinCount=-20;
coinDisplay.textContent=coinCount;
alert(`Calling ${Service}`)
