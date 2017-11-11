function sumNumbers (nums) {

    let numbers = nums[0].split(' ').map(Number);
    console.log(
        checker(numbers[0], numbers[1], numbers[2]) ||
        checker(numbers[0], numbers[2], numbers[1]) ||
        checker(numbers[1], numbers[2], numbers[0]) || 'No');


    function checker(num1, num2, sum) {
        if (num1 + num2 != sum) return false;
        if (num1 > num2)
            [num1, num2] = [num2, num1];
        return `${num1} + ${num2} = ${sum}`;
    }
}

