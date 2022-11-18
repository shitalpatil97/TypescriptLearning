var str="codemind Technology";
var vowels=["a","e","i","o","u"];
var count=0;
var arr:any=[];
// arr.push(1);
for (const char of str) {
    if (vowels.includes(char)) {
        count++;
        arr.push(char);
    }
    
}
console.log(arr);
var set=[...new Set(arr)];
console.log(set);




