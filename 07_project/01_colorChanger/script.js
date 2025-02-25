const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body"); 

buttons.forEach(function(buttons){
    console.log(buttons);
    // add event listener means when you click on the button, the function will be executed
    buttons.addEventListener("click", function(e){
        // e is the event object which carry the information about the event
        console.log(e);// outpout-> MouseEvent {isTrusted: true, screenX: 0, screenY: 0, clientX: 0, clientY: 0, …}
        // target is the property of the event object which gives the element on which the event is triggered
        console.log(e.target);// output- on console-> <button class="button">Red</button>
// e.target(batata hai ki event aa kaha se raha hai) means the element on which the event is triggered
        
// ab hme pata hai ki event kis button pe hua hai, toh ab hum us event ki id 
         if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;  
        }else if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;               
        }
        else if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;               
        }

        else if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;               
        }
        else if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;               
        }

            

    });

});
