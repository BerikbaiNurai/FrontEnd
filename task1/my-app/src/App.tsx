import UserCard from './UserCard';
import SkillList from './SkillList';
import type {User, Skill} from './types';

function App(){
  const user: User = {
    name: 'Nuray',
    email: "nuray@mail.com",
    age: 20
  };

  const skills: Skill[] = [
    {id: 1, name: "React", level: "Expert"},
    {id: 2, name: "TypeScript", level: "Intermediate"},
    {id: 3, name: "CSS", level: "Beginner"},
  ];

  return(
    <>
      <UserCard user = {user} isActive={true}>
        <p>This is user bio: My name is Nuray and I'm IT student</p>
      </UserCard>

      <SkillList skills = {skills} />
    </>
  );
}

export default App;