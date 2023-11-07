
class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    display(){
        document.write(`Hi, My Name is ${this.name},My Age is ${this.age} and I'm from ${this.country} <br>` )
    }
}
let user=new Person("john",23,"India");
let user2=new Person("jack",23,"India")
user.display();
user2.display();
