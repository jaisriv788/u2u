import Landing from "./screens/Landing";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
