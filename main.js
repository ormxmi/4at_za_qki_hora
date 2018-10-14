document.getElementById("suob6tenie_vuvedi").addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        sendMsg();
    }
});
var lastMessageMine = true;
var pulledDownMenu = false;
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

function pullDownMenu(e){
    var dropDownMenu = document.getElementsByClassName("overlay")[0];
    //document.getElementsByClassName("overlayArrow")[0].style.transform = "rotateZ(1080deg);";
    if(e=="close"){
        dropDownMenu.style.transform = "translateY(-85%)";
        pulledDownMenu = false;
    }else{
        if(!pulledDownMenu){
            dropDownMenu.style.transform = "translateY(0%)";
            pulledDownMenu = true;
        }
        else{
            dropDownMenu.style.transform = "translateY(-85%)";
            pulledDownMenu = false;
        }
    }
}

function changeColorsDrop(e){
    document.getElementsByClassName("chooseColorsOutline")[0].style.top = e;
}
let lastColorsId = 0;
function changeColors(colors){
    console.log(colors);
    console.log( document.getElementById("sendBtn"));
    document.getElementsByClassName('chooseColors')[lastColorsId].setAttribute("class","chooseColors");
    document.getElementsByClassName('chooseColors')[colors[2]].setAttribute("class","chooseColors chosen");
    lastColorsId = colors[2];
    document.getElementById("sendBtn").style.backgroundColor = colors[1];
    document.getElementById("sendBtn").style.color = colors[0];
    if(colors[1]=="pink")document.getElementById("sendBtn").style.color =colors[2];
    var senderLength = document.querySelectorAll('.send').length;
    var ownLength = document.querySelectorAll('.own').length;
    console.log(senderLength);console.log(ownLength);
    for(let i =0;i<senderLength;i++){
        
    
        
    document.getElementsByClassName("send")[i].style.backgroundColor = colors[1];
    document.getElementsByClassName("send")[i].style.color = colors[3];
    }
    for(let v =0;v<ownLength;v++){
       
    document.getElementsByClassName("own")[v].style.backgroundColor = colors[0];
        }
    
}