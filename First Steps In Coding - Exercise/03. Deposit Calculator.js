function calculator(deposit, deadline, percent){
    percent /= 100;
    let sum = deposit + deadline * ((deposit *  percent) / 12);
    console.log(sum);
}

calculator(200, 3, 5.7);