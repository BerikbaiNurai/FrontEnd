import {useState} from "react";
import UserProfile from "./components/UserProfile.jsx";

function App() {
  const [userId, setUserId] = useState(1);

  const refreshUser = () => {
    const randomId = Math.floor(Math.random() *10) + 1;
    setUserId(randomId);
  };

  return (
    <div>
      <h1>User Profile</h1>

      <button onClick={() => setUserId(1)}>User1</button>
      <button onClick={() => setUserId(2)}>User2</button>
      <button onClick={() => setUserId(3)}>User3</button>
      <button onClick={refreshUser}>refresh</button>

      <UserProfile userId = {userId} />
    </div>
  );
}

export default App;