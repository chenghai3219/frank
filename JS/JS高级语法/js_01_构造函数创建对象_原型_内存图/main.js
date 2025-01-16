function Person(name,age){
    this.name=name;
    this.age=age;

}

Person.prototype.eating=function() {
   console.log(this.name+"正在吃东西") 
}
Person.prototype.runing=function() {
    console.log(this.name+"正在跑路") 
 }
 console.log(Person)
console.log(Person.prototype)
console.log(Person.__proto__)


 var person1=new Person("frank2",18);


console.log(Person.prototype === person1.__proto__)

console.log(person1);
console.log(person1.__proto__.__proto__);



