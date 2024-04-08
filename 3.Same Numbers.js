function sameNumbers(input) {
    input = input.toString();
    let isSpecial = true;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1] && input[i+1]!== undefined) {
            isSpecial = false; 
        }
        sum =sum+Number(input[i]);
    }
   

    console.log(isSpecial);
    console.log(sum);
}


sameNumbers(22222); // Example usage