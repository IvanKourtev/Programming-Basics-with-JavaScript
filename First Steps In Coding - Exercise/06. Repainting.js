function calculator(nylon, paint, thinner, hours){
    let sum = (paint + paint * 0.1) * 14.5;
    sum += (nylon + 2) * 1.5;
    sum += thinner * 5;
    sum += 0.4;
    sum += (sum * 0.3) * hours;
    console.log(sum);
}

calculator(10, 11 ,4, 8);