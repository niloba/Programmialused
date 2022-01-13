function countCode(letter){
var count = 0;
 for(i = 0; i < data.length; i++){
    if(data[i].startsWith(letter))
        count++;
    }
 return count;
 } 
countCode(prompt()) 
