export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "John Smith", description: "Intro to React" },
  { id: 2, title: "Advanced TypeScript", instructor: "Anna Lee", description: "Deep dive TS" },
  { id: 3, title: "Node.js", instructor: "Mark Brown", description: "Backend development" },
  { id: 4, title: "UI/UX Design", instructor: "Kate Wilson", description: "User interface design" },
];

export const getCourseById = (id: number) => courses.find(c => c.id === id);