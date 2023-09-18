function processData(input) {
    var lines = input.split("\n");
    var str = "";
    var last = [];
    
    for (var i=1; i <= parseInt(lines[0]); i++) {
        var command = parseInt(lines[i].split(" ")[0]),
            args = lines[i].split(" ")[1];

        switch (command) {
            case 1:
                last.push(str);
                str = str + args;
                break;
            case 2:
                last.push(str);
                str = str.substring(0, str.length - parseInt(args));
                break;
            case 3:
                console.log(str.charAt(parseInt(args) - 1));
                break;
            case 4:
                str = last.pop();
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
