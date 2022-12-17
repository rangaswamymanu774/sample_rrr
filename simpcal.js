const n1=2;
const n2=4;

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

}
calculator("*")












