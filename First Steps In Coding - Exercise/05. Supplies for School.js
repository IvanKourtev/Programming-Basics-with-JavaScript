function calculator(pens, markers, preparations, discount){
    discount = (100 - discount) / 100;
    let sum = (pens*5.8 + markers*7.2 + preparations*1.2) * discount;
    console.log(sum);
}

calculator(2, 3, 4, 25);