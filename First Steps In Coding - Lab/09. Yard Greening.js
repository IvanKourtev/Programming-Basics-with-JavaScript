function calculateSumPlusDiscount(meters){
    let sum = meters * 7.61;
    discount = sum * 0.18;
    sum -= discount;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculateSumPlusDiscount(550);