function calculator(length, width, height, precent) {
    let capacity = (length * width * height) / 1000;
    capacity *= ((100 - precent) / 100);
    console.log(capacity);
}

calculator(85, 75, 47, 17);