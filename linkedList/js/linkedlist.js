class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(...nodes){
        let arr = nodes;
        this.list ={next: null};
        for(let i=arr.length;i>0;--i){
            let node = new Node(arr[i-1]);
            this.list.value = node.value;
            this.list = {next: this.list};
        }
        this.list=this.list.next;
    }
    
    pop(){
        
    }
}

var linkedList = new LinkedList(12,'122', 33, 'sds');
console.log(linkedList);
