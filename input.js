const n1= parseFloat(prompt("enter the first_number:" )) ;
const n2= parseFloat(prompt("enter the second_number:" )) ;


function calculator(m){
    switch(m){
        case "+":
            res=n1+n2
            console.log(`${n1} + ${n2}= ${res}` );
            break
        case "-":
            res=n1-n2
            console.log(`${n1} - ${n2}= ${res}` );
            break
        case "*":
            res=n1*n2
            console.log(`${n1} * ${n2}= ${res} `);
            break
        case "/":
            res=n1/n2
            console.log(`${n1} / ${n2}= ${res}` );
            break
        
            default:
                console.log("Error")
    }

}calculator(prompt("enter ther opertator:" ))
