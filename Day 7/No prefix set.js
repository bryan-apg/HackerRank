function TrieNode(letter){
    
    this.letter = letter;
    this.size = 0;
    this.complete = false;
    this.children = {};
    
}

TrieNode.prototype = {
    
    addChild: function(letter){
        
         //if(!this.hasChild(letter))
         this.children[letter] = new TrieNode(letter);
        
    },
    
    hasChild: function(letter){
        
        return !!this.children[letter];
        
    }
    
};

function Trie(){
    
    this.root = new TrieNode('');
    
}

Trie.prototype = {
    
    add: function(name){
        
        let letters = name.split('');
        let current = this.root;
        
        for(let i = 0; i < name.length; i++){
            
            let letter = name.charAt(i);
            /*
            if(!current.hasChild(letter) && current.complete){
                
                return {valid: false, error: name};
                
            } 
            
            current.addChild(letter);      
            current = current.children[letter];*/
            
            current.size++;
            
            if(!current.hasChild(letter)){
                
                if(current.complete) return {valid: false, error: name};
             
                current.addChild(letter);
                
            }
            
            current = current.children[letter];
            
        }
        
        current.complete = true;
        if(current.size > 0) return {valid: false, error: name};
        
        current.size++;
        
        return {valid: true, error: ''};
        
    }
    
};

function processData(input) {
    //Enter your code here
    let lines = input.split('\n');
    let n = lines[0];
    
    let trie = new Trie();
    
    for(let i = 0; i < n; i++){
        
        let entry = lines[1 + i];
        
        let status = trie.add(entry)
        if(!status.valid){
         
            console.log([
                
                'BAD SET',
                status.error
                
            ].join('\n'));
            
            return;
            
        }
        
    }
    
    console.log('GOOD SET');
    
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