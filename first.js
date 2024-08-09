function calcAvg(numbers) {
    const even = numbers.filter(number => number % 2 === 0);
    const somme = even.reduce((accumulator, number) => accumulator + number, 0);
    const average = somme / even.length;
    return average;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calcAvg(numbers));