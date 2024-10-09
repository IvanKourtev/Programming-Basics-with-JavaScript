function calculator(chicken, fish, vegetarian){
    let sum = (chicken*10.35 + fish*12.40 + vegetarian*8.15);
    sum += sum * 0.2 + 2.5;
    console.log(sum);
}

calculator(2, 4, 3);