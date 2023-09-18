function processData(input) {
    var lines = input.split('\n'),
        len = parseInt(lines[0], 10);

    lines = lines[1].split(" ");

    var A = Array.apply(null, new Array(100)).map(Number.prototype.valueOf, 0);

    for (var i=0; i<len; i++) {
        A[parseInt(lines[i], 10)]++;
    }

    console.log(A.join(" "));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });