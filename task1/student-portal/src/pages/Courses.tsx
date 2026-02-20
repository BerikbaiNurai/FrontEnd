interface Course {
    id: number;
    title: string;
}

const courses: Course[] = [
    { id: 1, title: "Web Development"},
    { id: 2, title: "Data Structures"},
    { id: 3, title: "Operating Systems"},
];

function Courses () {
    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key = {course.id}>
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;