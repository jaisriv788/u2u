import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useConstStore from "../store/constStore";
import useUserStore from "../store/userStore";
import axios from "axios";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { baseUrl } = useConstStore();
  const { setUser, setIsConnected } = useUserStore();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}login`, {
        username: username,
        password: password,
      });

      if (response.data.status == 200) {
        alert(response.data.msg);
        setUser(response.data.user);
        setIsConnected(true);
        navigate("/dashboard");
      } else if (response.data.status == 201) {
        alert(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-white text-black px-5 py-4 rounded-lg max-w-100">
        <div>
          <div className="text-xl">WELCOME TO U2U GLOBAL REWARD PROGRAM</div>
          <div className="text-[12px] font-[600] mt-2">
            To keep connected with us please Sign up with your personal
            information by email address and password.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <button
            type="submit"
            className="text-white bg-[#38C66C] font-semibold py-2 rounded cursor-pointer border border-black hover:border-amber-400 transition ease-in-out duration-300"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-5 text-sm text-purple-800">
          <Link to="/" className="cursor-pointer">
            Forgot Password?
          </Link>{" "}
          <Link to="/signup" className="cursor-pointer">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
