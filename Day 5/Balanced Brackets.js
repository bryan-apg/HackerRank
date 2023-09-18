function processData(input) {
    
    var res = '', tempStr;
    
    testArr = input.split('\n').slice(1);
    
    
    main: for (var i = 0; i < testArr.length; i++) {
    
        var string = testArr[i];
        tempStr = '';
        
        for (var j = 0; j < string.length; j++) {
            
            switch (string[j]) {
                case ')' :
                    if (tempStr && tempStr.slice(-1) === '(') {
                        tempStr = tempStr.slice(0, -1);
                        break;
                    } else {
                        no();
                        continue main;
                    };
                case '}' :
                    if (tempStr && tempStr.slice(-1) === '{') {
                        tempStr = tempStr.slice(0, -1);
                        break;
                    } else {
                        no();
                        continue main;
                    };
                case ']' :
                    if (tempStr && tempStr.slice(-1) === '[') {
                        tempStr = tempStr.slice(0, -1);
                        break;
                    } else {
                        no();
                        continue main;
                    };
                default: tempStr += string[j];
            }
            

        };
        
        if (!tempStr) {
            yes();
        } else {
            no();
        }
        
    };
    
    
    function yes() {
        res += 'YES' + '\n';
    }
    
    function no() {
        res += 'NO' + '\n';
    }
    
    console.log(res.trim());
    
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