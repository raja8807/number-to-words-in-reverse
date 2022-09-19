const getInput = ()=>{
    let num = parseInt(prompt("enter the number"))
    reverse(num)
}

getInput()

function numToWord(num){
    let numbers = ["zero" , "one", 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return numbers[parseInt(num)]
}

function reverse(num){
    while(num!=0){
        let lastDigit = num%10
        console.log(numToWord(lastDigit));
        num = (num-lastDigit)/10
    }


    // let length = num.toString().length
    // // console.log(length);
    // for(i=1 ; i<=length; i++){
    //     let lastDigit = num%10
    //     console.log(numToWord(lastDigit));
    //     num = (num-lastDigit)/10
    // }
}