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

console.log(Person.prototype)

 var person1=new Person("frank2",18);

 console.log(Object.getPrototypeOf(person1) === Person.prototype);

 person1.sheel();
 person1.play();


 





