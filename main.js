document.getElementById("suob6tenie_vuvedi").addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        sendMsg();
    }
});
var lastMessageMine = true;
function sendMsg(){

    var msg = document.getElementById("suob6tenie_vuvedi").value;
    while(msg[0]==" ")
    {
        msg = msg.substr(1);
    }
    if(msg!==""){
        var div_messageContainer = document.createElement("DIV");
        div_messageContainer.setAttribute("class","messageContainer dqsno");
            if(!lastMessageMine){
                var newName = document.createElement("P");
                newName.setAttribute("class","senderName");
                var newNameNode = document.createTextNode("Me");
                newName.appendChild(newNameNode); 
                div_messageContainer.appendChild(newName);

                lastMessageMine = true
            }
            
        document.getElementById("suob6tenie_vuvedi").value = "";
        var newMsg = document.createElement("P");
        newMsg.setAttribute("class","message lightgray");
        var newMsgNode = document.createTextNode(msg);
        newMsg.appendChild(newMsgNode);
        div_messageContainer.appendChild(newMsg);
        document.getElementsByClassName("actualChat")[0].appendChild(div_messageContainer);
}
    console.log(msg);
};