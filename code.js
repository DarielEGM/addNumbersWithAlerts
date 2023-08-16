let result = [];

function start(){
    let num1 = parseInt(prompt("Enter number 1"));
    let num2 = parseInt(prompt("Enter number 2"));
    
    resNum = add(num1, num2)

    result = result.concat(resNum);   

    console.log(result);

    document.body.innerHTML = "";

    for(let res1 of result){
        document.write(res1 + "<br>");
    }

    setTimeout(repeatCycle, 2000);
}


function add(num1, num2){
    let addNum = num1 + num2;
    return addNum;
}

function repeatCycle(){
    let validateRepeatFunction = prompt("Do you want to repeat the exercise? Write Yes")

        if(validateRepeatFunction == "Yes"){
            start();
        }else{
            alert("Good Bye")
            
        }
}

start();


