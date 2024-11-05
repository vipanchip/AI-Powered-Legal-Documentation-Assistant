import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle signup logic here
    navigate("/"); // Redirect to home page after signup
  };

  const redirectToLogin = () => {
    navigate("/login"); // Redirect to login page
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-4">
        <div className='pr-22'> 
          <img className=" mx-auto md:w-auto w-full" src="https://res.cloudinary.com/dvgieawnp/image/upload/v1695989200/emancipation-abstract-concept-illustration-businessman-ambition-motivation-work-office-success_335657-639_esdima.avif" alt="Illustration"/>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSignup}>
            <input type="hidden" name="remember" value="true"/>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="">Email address</label>
                <input name="email" value={input.email} onChange={(e) => setInput({...input, email: e.target.value})} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Email Address" />
              </div>
              <div>
                <label htmlFor="password" className="">Password</label>
                <div className="relative">
                  <input name="password" type={showPassword ? "text" : "password"} value={input.password} onChange={(e) => setInput({...input, password: e.target.value})} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Password"/>
                  <button type="button" onClick={toggleShowPassword} className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5 focus:outline-none">
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-700 text-xl" />
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="">Confirm Password</label>
                <div className="relative">
                  <input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={input.confirmPassword} onChange={(e) => setInput({...input, confirmPassword: e.target.value})} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Confirm Password"/>
                  <button type="button" onClick={toggleShowConfirmPassword} className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5 focus:outline-none">
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-700 text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </button>
              <button type="button" onClick={redirectToLogin} className="group relative w-full flex justify-center mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Already have an account? Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
