let counter = 3
function additem(){
    counter++;
    let strval = ("Idea " + counter + document.getElementById('usrinpt').value)
    let node = document.createElement("H2");                 
    let textnode = document.createTextNode(strval);         
    node.appendChild(textnode);                              
    document.getElementById("lst").appendChild(node); 
}    