let myLeads = ['www.google.com', 'www.youtube.com', 'www.facebook.com'];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);  
});


let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i];
}
ulEl.innerHTML = listItems;