export {}

//union
let username: string | number = "abc@gmail.com";
username = 123;
username = "abcde";

const printUsername = (name: string | number) => {
    if (typeof(name) === "string") {
        console.log(name.toUpperCase());
    } else {
        console.log(name);
        
    }
}

printUsername("hoidanit");