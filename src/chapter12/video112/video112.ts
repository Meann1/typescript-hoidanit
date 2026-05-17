export {}
console.log("Video 112");

class SinhVien {
    name: string | undefined;
    id: number | undefined;

    sleep() {
        console.log("is sleeping..");
        
    }
}

const sinhvien1 = new SinhVien();
sinhvien1.name = "hoidanit";
sinhvien1.id = 123;
sinhvien1.sleep();


class Person {
    private name: string;
    private age: number;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}