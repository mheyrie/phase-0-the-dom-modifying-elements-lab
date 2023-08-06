// Write your code here!
document.querySelector('main');
main.remove();
//(newHeader.nodeName)
const newHeader = document.createElement("h1");
newHeader.id = "victory";
// document.body.append("newheader");
const myName = "Mary";
//newHeader.textContent = `${myName} is the champion`;
newHeader.textContent = "Mary is the champion";
document.body.appendChild(newHeader);




