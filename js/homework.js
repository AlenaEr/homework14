//1
let sum = 0;
let count = 0;

while (true) {
    let input = +prompt("Введіть число або 'n' для завершення:");

    if (input === "n" || input === null) {
        break;
    }

    let number = parseFloat(input);

    if (!isNaN(number)) {
        sum += number;
        count++;
    } else {
        alert("Це не є числом. Будь ласка, введіть дійсне число.");
    }
}

if (count === 0) {
    alert("Ви не ввели жодного числа.");
} else {
    let avg = sum / count;
    alert("Середнє арифметичне введених чисел: " + avg);
}

//2
let numbers = [];
while (true) {
    let input = +prompt("Введіть число або 'n' для завершення:");

    if (input === "n" || input === null) {
        break;
    }

    let number = parseFloat(input);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Це не є числом.");
    }
}
if (numbers.length === 0) {
    alert("Ви не ввели числа.");
} else {
    let sum = numbers.reduce((acc, cur) => acc + cur, 0);
    let avg = sum / numbers.length;
    alert(
        "Введені числа: " + numbers.join(", ") +
        "\nКількість введених чисел: " + numbers.length +
        "\nСереднє арифметичне введених чисел: " + avg
    );
}