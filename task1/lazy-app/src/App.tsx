import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoadingSpinner from "./pages/LoadingSpinner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <>
      <nav>
        <Link to = "/">Home</Link> | {" "}
        <Link to = "/dashboard">Dashboard</Link> | {" "}
        <Link to = "/settings">Settings</Link> | {" "}
        <Link to = "/profile">Profile</Link>
      </nav>

      <Suspense fallback = {<LoadingSpinner />}>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "/settings" element = {<Settings />} />
          <Route path = "/profile" element = {<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;