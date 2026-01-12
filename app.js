"use strict"


let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...


let score = 20 ;

let highScore = 0 ;

document.querySelector(".symbol").textContent = secretNumber


document.querySelector(".check").addEventListener("click",function(){
    if (document.querySelector("input").value > secretNumber){
        console.log("Start Guessing is high" )
        document.querySelector("h2").textContent = "Start Guessing is high 📈"
        score = score-1
        document.querySelector(".container h3").textContent=`Score: ${score}`
        
    } else if (document.querySelector("input").value === String(secretNumber)){
        console.log("Congratulation" )
        document.querySelector("h2").textContent = "Congratulation 🎉 🎊 🎊 🎉"
        score = score+1
        document.querySelector(".container h3").textContent=`Score: ${score}`
        if(score> highScore){
            highScore = score
            document.querySelector(".container h4").textContent= `highScore: ${highScore}`
        }
    }
    else{
         console.log("Start Guessing is low" )
        document.querySelector("h2").textContent = "Start Guessing is low 📉"
        score = score-1
        document.querySelector(".container h3").textContent=`Score: ${score}`
    }

})