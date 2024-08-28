// [1,3,2,4,5,8,7]
// 1.
arr = [1,3,2,4,5,8,7];
last = arr[arr.length-1]
ind = arr.indexOf(last)
length = ind+1
console.log("the length of the array is"+" "+length)

arr = [1,3,2,4,5,8,7];
sort = arr.sort();
sum = 0
for (i of arr){
    sum+=i;
}console.log(sum)
act_sum = 36;
if (act_sum !=sum){
    missing = act_sum-sum
    console.log("missing number is"+" "+missing)
}else{
    console.log("no number is missing")
}


arr = [0,0,2,1,2,0,0]
len = arr.length;
count0 = 0;
for(i=0;i<len;i++){
    if(arr[i]==0){
        count0++
    }console.log("0:"+count0)
}
count1 = 0;
for(i=0;i<len;i++){
    if(arr[i]==1){
        count1++
    }console.log("1:"+count1)
}
count2 = 0;
for(i=0;i<len;i++){
    if(arr[i]==2){
        count2++
    }console.log("2:"+count2)
}
arr1 = [count0+count1+count2]
console.log(arr1)
