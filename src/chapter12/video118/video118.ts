export {}
console.log("Video 118");

interface IAnimal {
    makeSound(): void;
    eat(): string;
}

class Dog implements IAnimal {
    eat(): string {
        return "dog is eating...";
    };

    makeSound(): void {
        console.log("go go");
    }

}

class Cat implements IAnimal {
    makeSound(): void {
        console.log("meow meow");
    }
    eat(): string {
        return "cat is eating...";
    }

}

class Pig implements IAnimal {
    makeSound(): void {
        console.log("un in");
    }
    eat(): string {
        return "pig is eating...";
    }
}

const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();

const myZoo: IAnimal[] = [myDog, myCat, myPig];
myZoo.forEach((animal) => {
    animal.makeSound();
})





class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}

class LapTrinhVien extends NhanVien{ 
    skill: string;

    constructor(skill: string, id: number, name: string) {
        super(id, name);
        this.skill = skill;
    }
}

const hoidanti = new LapTrinhVien("typescript", 123, "eric");
