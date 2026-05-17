export {}


class Cat {
    private _name: string;
    private _age: number;

    get name() {
      return this._name
    }
    
    set name(val: string) {
      this._name = val
    }
    
    get age() {
      return this._age
    }
    
    set age(val: number) {
      this._age = val
    }

    
	
    constructor(name: string, agea: number) {
        this._age = age;
        this._name = name;
    }

    makeSound() {
        console.log("meow meow...");
        
    }
}