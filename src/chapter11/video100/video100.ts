export {}

type TSuperRole = "ADMIN" | "SUPERADMIN" | "USER"

const user: TSuperRole = "ADMIN";

enum roleEnum {
    USER = "User",
    SUPERADMIN = "SuperAdmin",
    ADMIN = "Admin"
}
const myRole: roleEnum = roleEnum.ADMIN;
const myRole2: roleEnum = roleEnum.USER;
console.log(myRole, myRole2);
