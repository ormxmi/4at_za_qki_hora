document.getElementById("suob6tenie_vuvedi").addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        sendMsg();
    }
});
function sendMsg(){
    var msg = document.getElementById("suob6tenie_vuvedi").value;
    if(msg!==""){
    document.getElementById("suob6tenie_vuvedi").value = "";
    var newMsg = document.createElement("P");
    newMsg.setAttribute("class","message dqsno");
    var newMsgNode = document.createTextNode(msg);
    newMsg.appendChild(newMsgNode);
    document.getElementsByClassName("actualChat")[0].appendChild(newMsg);
}
    console.log(msg);
};