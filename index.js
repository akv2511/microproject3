
let data=require('./food.json');
function AllFood(){

   let res= data.map(i => i.foodname)
   return res.toString()
}

console.log(AllFood())


function vegetable(){
     const res= data.filter(i=>i.category==="Vegetable")
     return res.map(i=>i.foodname).toString()
}
 console.log(vegetable())

 function fruit(){
    const res= data.filter(i=>i.category==="Fruit")
    return res.map(i=>i.foodname).toString()
}
console.log(fruit())

function protine(){
    const res= data.filter(i=>i.category==="Protein")
    return res.map(i=>i.foodname).toString()
}
console.log(protine())


function nuts(){
    const res= data.filter(i=>i.category==="Nuts")
    return res.map(i=>i.foodname).toString()
}
console.log(nuts())


function grains(){
    const res= data.filter(i=>i.category==="Grain")
    return res.map(i=>i.foodname).toString()
}
console.log(grains())


function dairy(){
    const res= data.filter(i=>i.category==="Dairy")
    return res.map(i=>i.foodname).toString()
}
console.log(dairy())


function calorie(){
    const res= data.filter(i=>i.calorie>100)
    return res.map(i=>i.foodname).toString()
}
console.log(calorie())


function calorie1(){
    const res= data.filter(i=>i.calorie<100)
    return res.map(i=>i.foodname).toString()
}
console.log(calorie1())
