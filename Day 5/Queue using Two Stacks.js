function processData(input) {
    var lines = input.split("\n");
    var count = +lines[0];
    var queue = [];
    for (var i = 1; i <= count; i++) {
        var args = lines[i].split(' ');
        var cmd = +args[0];
        var arg;
        switch (cmd) {
            case 1:
                arg = args[1];
                queue.push(arg);
                break;
            case 2:
                queue.shift();
                break;
            case 3:
                console.log(queue[0]);
                break;
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});