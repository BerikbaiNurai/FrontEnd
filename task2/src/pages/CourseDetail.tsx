import { useParams, useLoaderData, useNavigate} from "react-router-dom";
import type { Course } from "../data";

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  const navigate = useNavigate();

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route ID parameter: {id}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default CourseDetail;