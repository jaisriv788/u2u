import { useState } from "react";
import { Link } from "react-router";
import { countries } from "../data/country";

function Signup() {
  const [referralId, setReferralId] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checked, setChecked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(countries);
    alert(
      `Submitted: ${referralId},${username},${fullName},${country},${number},${email},${password},${passwordConfirm}`
    );
  }
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-white text-black px-5 py-4 rounded-lg max-w-120">
        <div>
          <div className="text-xl">WELCOME TO U2U DELEGATOR REWARD PROGRAM</div>
          <div className="text-[12px] font-[600] mt-2">
            To keep connected with us please Sign up with your personal
            information by email address and password.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Referral Id"
            value={referralId}
            onChange={(e) => setReferralId(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="text"
            placeholder="FullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          >
            <option value="">Select country</option>
            {countries.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="border border-gray-300 py-2 px-3 rounded w-full glow-focus"
          />
          <div className=" flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setChecked((prev) => !prev)}
              checked={checked}
              className="checkbox checkbox-sm checkbox-info"
            />
            <span className="text-sm">
              I agree with the website's{" "}
              <Link className="text-purple-800">Terms and conditions</Link>
            </span>
          </div>
          <button
            type="submit"
            className="text-white bg-[#38C66C] font-semibold py-2 rounded cursor-pointer border border-black hover:border-amber-400 transition ease-in-out duration-300"
          >
            REGISTER NOW
          </button>
        </form>
        <div className="mt-5 text-sm text-purple-800">
          <span className="text-black">Already a member?</span>{" "}
          <Link to="/signin" className="cursor-pointer">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
