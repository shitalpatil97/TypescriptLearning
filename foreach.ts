var array:any=[1,2,3,45,66,77];
console.log(array);

array.forEach((value)=>{

    if (value>20) {
        console.log(value);
        
        
    }
    

});
var arr=array.map((value)=>{
    return value+1;

});
console.log(arr);
var arr=array.filter((value,index)=>{
    if (index%2!=0) {
        console.log(value);
        
    }

});
