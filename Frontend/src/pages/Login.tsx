import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dummy credentials
    const validCredentials = {
      email: "demo@college.edu",
      password: "password123"
    };

    // Simulate API call delay
    setTimeout(() => {
      if (email === validCredentials.email && password === validCredentials.password && role) {
        // Store user data in localStorage
        const userData = {
          name: "Arg",
          email: email,
          role: role === "hod" ? "HOD" : role.charAt(0).toUpperCase() + role.slice(1)
        };
        localStorage.setItem("user", JSON.stringify(userData));
        
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        alert("Invalid credentials! Use demo@college.edu / password123");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF7F1]">
      <div className="w-full max-w-md bg-[#FFF7F1] rounded-2xl p-8 flex flex-col items-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#E9F1FF] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#3B82F6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 
                00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">
          Sign in to your timetable management account
        </p>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 w-120">
          <h3 className="text-xl font-bold text-center mb-1">Sign In</h3>
          <p className="text-gray-500 text-sm text-center mb-6">
            Enter your credentials to access your account
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email Address</label>
            <div className="flex items-center border border-[#EDE4DC] rounded-lg px-3 bg-[#FFF7F1]">
              <Mail className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="your.email@college.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-2 bg-transparent outline-none text-black"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <div className="flex items-center border border-[#EDE4DC] rounded-lg px-3 bg-[#FFF7F1]">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 p-2 bg-transparent outline-none text-black"
                required
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-sm mb-1">Select Role</label>
            <div className="flex items-center border border-[#EDE4DC] rounded-lg px-3 bg-[#FFF7F1]">
              <User className="h-5 w-5 text-gray-400" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="flex-1 p-2 bg-transparent outline-none text-gray-700"
              >
                <option value="">Choose your role</option>
                <option value="teacher">Teacher</option>
                <option value="hod">HOD</option>
                <option value="admin">Super Admin</option>
              </select>
            </div>
          </div>

          {/* Sign In Button */}
          <form onSubmit={handleLogin}>
            <button 
              type="submit"
              disabled={!email || !password || !role || isLoading}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 rounded-lg font-medium transition-colors"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-800 font-medium mb-1">Demo Credentials:</p>
            <p className="text-xs text-blue-700">Email: demo@college.edu</p>
            <p className="text-xs text-blue-700">Password: password123</p>
          </div>
          
          {/* Footer */}
          <p className="text-gray-400 text-xs text-center mt-4">
            Having trouble? Contact your system administrator
          </p>
        </div>
      </div>
    </div>
  );
}