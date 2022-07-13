let min = function(in1, in2) {
    let temp1 = parseInt(in1);
    let temp2 = parseInt(in2);

    if (temp1 < temp2) {
        return temp1;
    } else if (temp2 < temp1) {
        return temp2;
    } else {
        return "Equal values!";
    }
}

console.log(min(3, 9));