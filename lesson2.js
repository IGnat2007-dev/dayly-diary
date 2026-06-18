const ANCESTRY_FILE=require("./ancestry");
const ancestry=JSON.parse(ANCESTRY_FILE);


function map(array,transform){
    var mapped=[];
    for(var i=0;i<array.length;i++){
        mapped.push(transform(array[i]));
    }
    return mapped;
}

var overNinety=ancestry.filter(function(person){
    return person.died - person.born>90
})

// console.log(overNinety);

// console.log(map(overNinety,function (person){
//     return person.name
// }))


function reduce (array,combine,start){
    var current=start;
    for(var i=0;i<array.length;i++){
        current=combine(current,array[i]);
    }
    return current;
}
console.log([1,2,3,4].reduce(function(a,b){
    console.log(a,b)
    return a+b
}))



console.log(ancestry.reduce(function(min,cur){
    if(cur.born<min.born)return cur;
    else return min;
}));