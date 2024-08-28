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

arr = [1, 3, 2, 4, 5, 8, 7];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr); 


arr = [0,0,1,0,1,0,1]
count0 = 0;
for(i=0;i<=arr.length;i++){
    if(arr[i]==0){
        count0+=1;
    }
}console.log(count0)
count1 = 0;
for(j=0;j<=arr.length;j++){
    if(arr[j]==1){
        count1+=1
    }
}console.log(count1)
arr1 = []
for(k=1;k<=count0;k++){
    arr1.push(0)
}console.log(arr1)
for(l=1;l<=count1;l++){
    arr1.push(1)
}console.log(arr1)



arr = [0,0,2,1,2,0,0,1]
count0 = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        count0 += 1
    }
}console.log(count0);
count1 = 0;
for(j=0;j<arr.length;j++){
    if(arr[j]==1){
        count1+=1
    }
}console.log(count1)
count2 = 0;
for(k=0;k<=arr.length;k++){
    if(arr[k]==2){
        count2+=1
    }
}console.log(count2)
arr1 = []
for(l=1;l<=count0;l++){
    arr1.push(0)
}console.log(arr1)
for(m=1;m<=count1;m++){
    arr1.push(1)
}console.log(arr1)
for(n=1;n<=count2;n++){
    arr1.push(2)
}console.log(arr1)