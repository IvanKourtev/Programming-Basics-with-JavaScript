function calculator(price){
    let shoes = price * 0.6;
    let kit = shoes * 0.8;
    let ball = kit * 0.25;
    let accessories = ball * 0.2;
    price += shoes + kit + ball + accessories;
    console.log(price);    
}

calculator(365);