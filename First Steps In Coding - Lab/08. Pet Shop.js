function calculateSum(dogFood, catFood){
    dogFood *= 2.5;
    catFood *= 4;
    let sum = dogFood + catFood;
    console.log(`${sum} lv.`);
}

calculateSum(5, 4);