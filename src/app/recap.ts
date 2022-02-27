const username:string | number = 'maria';
const sum =(a:number, b:number)=>{
  return a+b
}
sum(1,2);

class Persona{
  constructor(public age:number, public lastName:string){
    this.age=age;
    this.lastName=lastName;
  }
}
// se crea una instancia de persona
const maria= new Persona(15,'Molina');
maria.age;
