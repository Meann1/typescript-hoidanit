export { }


// id: số nguyên (number)
// name: chuỗi (string)
// email: chuỗi (string)
// isPremium: true nếu học viên đăng ký gói cao cấp, false nếu thường
// contact: có thể là email (string) hoặc số điện thoại (number) → dùng union type
type TStudent = {
    id: number;
    name: string;
    isPremium: boolean;
    contact: string | number;
}

const student1: TStudent = {
    id: 1,
    name: "asdf",
    isPremium: true,
    contact: 1234567890,
}

const student2: TStudent = {
    id: 2,
    name: "qwert",
    isPremium: false,
    contact: "abc@gmail.com",
}


// courseId: số nguyên (number)
// title: tên khóa học (string)
// price: giá gốc (number)
// students: danh sách học viên đã đăng ký → mảng object chứa học viên 
type TCourse = {
    courseId: number;
    title: string;
    price: number;
    students: TStudent[];
}

const myCourse1: TCourse = {
    courseId: 1,
    title: "React",
    price: 49,
    students: [],
}

const registerStudentToCourse = (student: TStudent, course: TCourse): void => {
    course.students.push(student)
}

const printCourseInfo = (course: TCourse) => {
    console.log(`Name of Course: ${course.title} 
Number of registed students: ${course.students.length}`);

        if (course.students.length === 0) {
            console.log("No students.");
            
        } else {
            course.students.forEach((student, index) => {
                console.log(`${index + 1}. ${student.name}`);
            });
        }
}

registerStudentToCourse(student1, myCourse1);
registerStudentToCourse(student2, myCourse1);
printCourseInfo(myCourse1);