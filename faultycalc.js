let random=Math.random()
let num_1 = prompt("Enter First Number : ")
let num_2 = prompt("Enter Second Number : ")
let Operation = prompt("Enter Operation : ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
 if (random > 0.1){
    //Perform Correct Calculation
    alert(`The result is ${eval(`${num_1} ${Operation} ${num_2}`)}`)
 }
 
else{
    //Perform wrong calculation
    Operation=obj[Operation]
     alert(`The result is ${eval(`${num_1} ${Operation} ${num_2}`)}`)
}