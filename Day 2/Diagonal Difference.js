function diagonalDifference(arr) {
    const n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDifference;
}

const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
const result = diagonalDifference(matrix);
console.log(result); 
