Lab05 task2:

In this lab I typed React state and event handles with TypeScript. I used useState<User[]> for users and typed onChange/onClick events. React.ChangeEvent<HTMLInputElement> is used instead of any to safely access event.target.value. Explicit generics (useState<User[]>) are needed when TS cannot infer type; otherwise TS can infer it from initial value (useState("")). No any is used, strict mode is true.

Usage: Input to search users, button to clear search, shows listor "No results found".