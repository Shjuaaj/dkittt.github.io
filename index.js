//Detecting which key pressed on the website
var size= document.getElementsByClassName("drum").length;
for(var i=0;i<size;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",handleclick);
}

function handleclick(){
    var buttonInnerHtml= this.innerHTML;
    playMusic(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
}
    //Detecting keypress on keyboard
    document.addEventListener("keypress",function(event){ // adding event listner to whole webpage.
        playMusic(event.key)
        addAnimation(event.key);
    });
    function playMusic(key){
      
        switch(key){
            case "w":
                var audio = new Audio('./tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('./tom-2.mp3');
                audio.play();
                break;
                case "s":
                var audio = new Audio('./tom-3.mp3');
                audio.play();
                break;
    
                case "d":
                var audio = new Audio('./tom-4.mp3');
                audio.play();
                break;
                
                case "j":
                var audio = new Audio('./crash.mp3');
                audio.play();
                break;
               
                case "k":
                var audio = new Audio('./kick-bass.mp3');
                audio.play();
                break;
    
                case "l":
                var audio = new Audio('./snare.mp3');
                audio.play();
                break;
                default: alert(chara);

    }
    }

    function addAnimation(theButton){
        document.querySelector("."+theButton).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+theButton).classList.remove("pressed");
        },100);
    }

  
