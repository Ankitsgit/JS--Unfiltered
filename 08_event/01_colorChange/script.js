// generate a random color 
const randomColor =function randomColor(){
    const hex ="0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){// 6 is the length of the color code 
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
} ;
// console.log(randomColor());
// select the button
let intervalId;
const startChangingColor = function startChangingColor(){
    if(!intervalId){// if the intervalId is not set  
        intervalId=setInterval(changeBgColor,1000);
    }
    // change the color of the body
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function stopChangingColor(){
    clearInterval(intervalId); 
    intervalId = null;

};

document.querySelector("#start").addEventListener("click",startChangingColor);

document.querySelector("#stop").addEventListener("click",stopChangingColor);