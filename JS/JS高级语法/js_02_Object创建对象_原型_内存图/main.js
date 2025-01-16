var obj={
    name:"frank",
    age:18
}

var obj2=new Object();
obj2.name="frank2";
obj2.age=18;

//隐式原型有些浏览器不兼容，仅仅查看使用，所有我们通常不会通过隐式原型操作
obj.__proto__.play=function(){
    console.log("Object原型: play")
}


Object.prototype.sheel=function(){
    console.log("Object原型: sheel")
}


Object.drink=function(){
    console.log("Object构造函数: drink")
}


//console.log(Object.getOwnPropertyDescriptor(Object,"create"))
//console.log(Object.getOwnPropertyDescriptors(Object))
//  for (let key in Object) {  
//       console.log(key);   
//   }


console.log(Object.__proto__ === Function.prototype)
console.log(Object.prototype)



