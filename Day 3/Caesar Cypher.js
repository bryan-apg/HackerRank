function processData(input) {
    
    var lines = input.split("\n");
    var L = parseInt(lines[0]);
    var message = lines[1].split("");
    var n = parseInt(lines[2]) % 26;
    var newcode = "";
    
    for (var i = 0; i < L; i++){
       
        var code = message[i].charCodeAt(0);
        if(65 <= code && code <= 90){
            newcode = code + (code + n > 90 ? n - 26 : n);
            message[i] = String.fromCharCode(newcode);
        }
        else if(97 <= code && code <= 122){
            newcode = code + (code + n > 122 ? n - 26 : n);
            message[i] = String.fromCharCode(newcode);
        }
        else{
        }
    }
    
    console.log(message.join("").toString());
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