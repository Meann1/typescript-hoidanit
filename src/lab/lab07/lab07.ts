export { }

console.log("lab 07");

interface IBlogs {
    id: number,
    title: string,
    content: string,
    author: string
}

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json() as IBlogs[];
    if (data.length) {
        const tbody = document.querySelector("#blogs tbody");

        data.forEach((blogs, index) => {
            tbody!.innerHTML += `
            <tr>
                <td>${blogs.id}</td>
                <td>${blogs.title}</td>
                <td>${blogs.author}</td>
                <td>${blogs.content}</td>
            </tr>
            `;
        })
    }
    console.log("Check data: ", data);

}

fetchBlogs();