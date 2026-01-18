// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// function print(){
//   document.getElementById("print-click").innerHTML += "Button clicked!"+"<br>";
// }
// This needs onclick="print()" in button tag
// Write a system that does the same without 'onclick="print()" in button tag'
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function()){
    document.getElementById("print-click").innerHTML += "Button clicked!"+"<br>";
}
