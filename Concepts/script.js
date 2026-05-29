// Functionalities on Arrays
let arr = [1,2,3,4,5];

// for Each
arr.forEach(function(val){
    console.log(val + " hello")
})

// map
var ans = arr.map((val)=>{
    return 13
})
console.log(ans)

// filter
var newarr = arr.filter((val)=>{
    if((val % 2) == 0){
        return true;
    }
})
console.log(newarr)

// find
var result = arr.find((val)=>{
    if(val === 13){
        return true;
    }
})
console.log(result);

// indexOf
console.log(arr.indexOf(1));




// Basics of Objects
let obj = {
    name: "Devansh Chhabra",
    age: 12,
    email: "devanshchhabra@gmail.com"
};

console.log(obj.name)
console.log(obj['name'])




// Async Code

/*
Code that runs line by line is called sync code & the code snippet that does not run line by line -> to side stack & when the execution of main stack is completed(sync code) then async code -> to main stack and then executes
*/

/*
To create async code we use `await` keyword
To use this in a function mark it `async`
*/

async function getResult(){
    var blob = await fetch(``);
    var result = await blob.json();
    return result;
}
let result = await getResult();
