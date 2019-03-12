module.exports = function check(str, bracketsConfig) {
  var arrOpen=[];
    var arrClose=[];
    var strOpen="";
    var strClose="";
    for(let k=0;k<bracketsConfig.length;k++){
        let item=bracketsConfig[k];
        for(let j=0;j<item.length;j++){
            if(j==0){
                arrOpen.push(item[j]);
                strOpen+=item[j];
            }
            else {
              arrClose.push(item[j]); 
              strClose+=item[j];
            }
        }
    }
    
    
    var newStr=strOpen+strClose;
   // alert(newStr);
    
     var stack=[];
    for (let i=0;i<str.length;i++){
       for(let j=0;j<newStr.length/2;j++){
           //alert(newStr[j]+''+newStr[j+newStr.length/2])
          if(str[i]==newStr[j]){
              stack.push(str[i]);
             /* if(newStr[j]==newStr[j+newStr.length/2]){
                  stack.pop();
              }*/
              
          }
        if (str[i]!==newStr[j]){
             for(let k=0;k<newStr.length/2;k++){
               if(str[i]==newStr[k+newStr.length/2] && str[i-1]==newStr[k]){
                  //alert(str[i-1]+''+str[i]); 
                  stack.pop();
               } 
             }
          }
         if (str[i]==newStr[j+newStr.length/2]){
             for(let k=0;k<newStr.length/2;k++){
               if(str[i]==newStr[k+newStr.length/2] && str[i-1]==newStr[k]){
                  //alert(str[i-1]+''+str[i]); 
                  stack.pop();
               } 
             }
          }
       }
    }
       
    
    //alert(stack);
    if(stack.length>0){
        return false;
    }
    else { return true;
        
    }
}
