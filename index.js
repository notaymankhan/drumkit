for(var i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
    


    
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
    
})











function makeSound(key){


    switch (key) {
        case "w":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();

            
            break;
        case "a":
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();

                
                break;

        case "s":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
    
                    
                    break;

        case "d":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        
                        
                        break;
        case "j":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            
                            
                            break;
        case "k":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
                
                                
                                break;

        case "l":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
                
                                
                                break;
    
    
        default:
            console.log(key)
            break;
    }


}




// for(var i =0; i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("keydown",function(){
//         var keyInnerHTML = this.innerHTML;

//         switch (keyInnerHTML) {
//             case "w":
//                 let crash = new Audio('./sounds/crash.mp3');
//                 crash.play();

                
//                 break;
//             case "a":
//                 let kick = new Audio('./sounds/kick-bass.mp3');
//                 kick.play();
    
                    
//                     break;

//             case "s":
//                 let snare = new Audio('./sounds/snare.mp3');
//                 snare.play();
        
                        
//                         break;

//             case "d":
//                 let tom1 = new Audio('./sounds/tom-1.mp3');
//                 tom1.play();
            
                            
//                             break;
//             case "j":
//                 let tom2 = new Audio('./sounds/tom-2.mp3');
//                 tom2.play();
                
                                
//                                 break;
//             case "k":
//                 let tom3 = new Audio('./sounds/tom-3.mp3');
//                 tom3.play();
                    
                                    
//                                     break;

//             case "l":
//                 let tom4 = new Audio('./sounds/tom-4.mp3');
//                 tom4.play();
                    
                                    
//                                     break;
        
        
//             default:
//                 console.log(keyInnerHTML)
//                 break;
//         }


//     });

// }


// function handleClick(){
//     let sound = new Audio('./sounds/snare.mp3');
    
//     sound.play();
// }


function BellBoy(name,age,exp,workpm){
    this.name = name;
    this.age  = age;
    this.experience = exp;
    this.hasWorkPermit = workpm;
    this.clean = function(){
        alert("cleaning in progress");
    }
}


function animation(key){
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}


