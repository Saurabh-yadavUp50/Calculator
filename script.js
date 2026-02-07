

let dispaly = document.getElementById("Values");
let btnvalue = document.querySelectorAll(".btn");

btnvalue.forEach(i=>{

    i.addEventListener("click",()=>{
    
    let value= i.innerText;

     if (value === "X"){
         dispaly.value = dispaly.value.slice(0,dispaly.value.length-1)
         console.log(dispaly.value);

    }
     
    else if(value === "AC"){

        dispaly.value = "";
    }
    else if (value === "="){
        dispaly.value = eval(dispaly.value);

    }

    else{
        dispaly.value = dispaly.value + value ;
    }

        
    })
})










// let k=document.querySelectorAll(".btn");
// k.forEach(i=>{
//     i.addEventListener("click",()=>{
//     console.log("radhe radhe");
// });
// });