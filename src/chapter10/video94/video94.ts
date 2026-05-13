export {}

const person: {
    name: string;
    age: number;
    address: string;
} = {
    name: "abc",
    age: 12,
    address: "Hanoi",
}

const printInfo = (people: {
    name: string;
    age: number;
    address: string;
}) => {
    console.log(people.name);
    
}

printInfo(person);

//optional
const student1: {
    name: string;
    id: number;
    phone?: number
} = {
    name: "asdasdf",
    id: 123

}

const student2 = {
    name: "abc",
    id: 123,
    phone: 123123123,
}

type TPerson = {
    name: string;
    age: number;
    address: string;
}

const person1: TPerson = {
    name: "abcwer",
    age: 25,
    address: "hanoi",
}

const printStudent = (st: TPerson) => {
    console.log(st.name);
    console.log(st.age);
    console.log(st.address);
    
}
printStudent(person1);