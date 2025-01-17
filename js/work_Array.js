/**
làm việc với mảng trong js
 */
var my_list = [
{
    id : 1,
    name : "javascripts",
    coin : 0,
},
{
    id : 2,
    name : "html, css",
    coin : 1,
},
{
    id : 3,
    name : "python",
    coin : 1,
},
{
    id : 4,
    name : "c++",
    coin : 200,
},
{
    id : 5,
    name : "node js",
    coin : 200,
},
{
    id : 6,
    name : "python",
    coin : 10,
},
{
    id : 7,
    name : "python",
    coin : 2002,
}
];
//phuong thuc method forEach()
my_list.forEach(function(my_list, index){
    // index duyet qua tung phan tu cua mang
    console.log(my_list)
});
// phuong thuc every()
var isfree = my_list.every(function(my_lists,index){
/**index duyet qua tung phan tu trong mang trong truong hop nay no
 da duyet phan tu 0 va 1*/  
    console.log(index)
    return my_lists.coin === 0;
/* dung toan tu so sanh neu coin trong cac phan 
tu trong mang khac 0 thi false === 0 thi true*/
});console.log(isfree);

// phuong thuc some()
/**phuong thuc some() se kiem tra neu co 1 phan tu === 0 thi se tra
 ve true neu tat ca deu khac 0 thi se tra ve false
*/
var isfree = my_list.some(function(my_lists,index){
        //console.log(index)
        return my_lists.coin === 0;
});console.log(isfree);

// phuong thuc find() : tìm 
var my_lists = my_list.find(function(my_lists,index){
    //console.log(index)
    return my_lists.name === "python";
/**tra ve phan tu co "python". 
 * Va chi tim ra 1 phan tu neu giong nhau
 * Neu k co phan tu nao thi se tra ve undefined */ 
});console.log(my_lists);

//phuong thuc filter
var my_filter_list = my_list.filter(function(my_lists, index){
/**phuong thuc filter se tim ra  nhung phan tu co "python"
 va lay tat ca phan tu do vao 1 mang [array]
 */
    return my_lists.name === "python";
});
console.log(my_filter_list);

function handlecour(list,index,originArray){
    //console.log(list);
    return `<h2>${list.name}<h2>`;
   /* return{ id : list.id, 
            name : `ngôn ngữ : ${list.name}`, 
            coin : list.coin,
            coinText : `giá : ${list.coin}`,
            index : index,
            originArray : my_list,
    };*/
}
var newcour = my_list.map(handlecour);


console.log(newcour.join(''));

console.log([1, 2, 3, 2, 1].indexOf(2));

console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));

console.log("slice : "+[0, 1, 2, 3, 4].slice(3));


function repeat(n, action) {

    for (let i = 0; i < n; i++) {

        action(i);
    }
}

repeat(5, console.warn);

let labels = [];

repeat(10, i => {

    labels.push(`Unit ${i + 1}`);
});

console.log(labels);

for (let i = 0; i < labels.length; i++) {

    console.log(labels[i]);
}

function reduce(array, combine, start) {

    let current = start;

    for (let element of array) {

        current = combine(current, element);

    }

    return current;
    
}
//sum elements in array
console.log(reduce([10,10,10,10], (a, b) => a + b, 10));
    

function remove(index) {

    var array = ["a", "b", "c", "d", "e"];

    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(2));

function countBy(items, groupName) {

    let counts = [];

    for (let item of items) {

        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);

        if (known == -1) {

            counts.push({name, count: 1});

        } 

        else {
            
            counts[known].count++;
        }
    }

    return counts;
}

console.log(countBy([1, 2, 3, 4], n => n > 1));






    