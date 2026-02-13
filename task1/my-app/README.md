Lab_05 task1:

In this Lab I refactored React project from JavaScript to TypeScript. The main goal was to understand how TypeScript helps to catch errors before code runs. It checks types at compile time, so it is safer than PropTypes.

1.TypeScript Setup: I created project using Vite with React and TypeScript template. In tsconfig,json I made sure that strict mode is true. Strict mode type checking stronger.

2.Interfaces and Types: I created file types.ts and defined: interface USer, interface Skill, type SkillLevel. I used interface for ibject types (User and Skill). I used union type for SkillLevel: 'Beginner' | 'Intermediate' | 'Expert'. It limis values and prevents wrong strings.

3.UserCard Component: I created interface UserCardProps with: user: User, isActive?: boolean, children: React.ReactNode. I user optional prop with default value. Children allows to pass JSX inside component.

4.SkillList Component: I created SkillListProps with: skills: Skill[]. Each skill follows Skill interface. I used conditional styling to show different level colors.

What I Learned: How to use interface and type, how to type React props, how optional props work and why strict mode is