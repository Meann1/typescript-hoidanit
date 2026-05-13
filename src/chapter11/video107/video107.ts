export {}
console.log("Video 107");

interface IUser {
    id: number,
    email: string,
    name: string,
}

const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[];
    const data: IUser[] = await res.json();
    console.log("Check data: ", data[0].name);
} 

fetchUser();