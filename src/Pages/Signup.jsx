import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Logo1.png";
import Substract from "../images/Subtract.png";
import githubIcon from "../images/Github.png";
import bitbucketIcon from "../images/Bitbucket.png";
import azureDevopsIcon from "../images/Azure.png";
import gitlabIcon from "../images/Gitlab.png";
import key from "../images/key.png";
import Group from "../images/Group.png"

const Signup = () => {
  const [mode, setMode] = useState("saas");
  const navigate = useNavigate();
  const handleSignin=()=>{
    navigate("/homepage")
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex bg-blue-700">
      {/* Stats Panel */}
      <div className="hidden lg:relative lg:flex lg:w-1/2 bg-white  p-8 items-center justify-center">
        {/* first Two Box */}
        <div className="space-y-8 max-w-2xl lg:relative -mt-48 ">
          {/* First Box */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_-4px_8px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.12),4px_4px_8px_rgba(0,0,0,0.08),-4px_4px_8px_rgba(0,0,0,0.08)]">
            <div className="flex items-center space-x-2 mb-4 pb-3 border-b-2">
              <img src={Logo} alt="CodeAnt AI" className="w-6 h-6" />
              <span className=" font-bold text-lg">
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-bold text-xl">30+</div>
                <div className="text-xs font-medium text-gray-600">Language Support</div>
              </div>
              <div>
                <div className="font-bold text-xl">10K+</div>
                <div className="text-xs font-medium text-gray-600">Developers</div>
              </div>
              <div>
                <div className="font-bold text-xl">100K+</div>
                <div className="text-xs font-medium text-gray-600">Hours Saved</div>
              </div>
            </div>
          </div>
          {/* Second Box */}
          <div className="bg-white rounded-3xl p-4 px-6 shadow-[0_-4px_10px_rgba(0,0,0,0.08),0_4px_10px_rgba(0,0,0,0.08),4px_4px_10px_rgba(0,0,0,0.06),-4px_4px_10px_rgba(0,0,0,0.06)] w-3/4 absolute top-24 left-32 z-20">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">
                <img src={Group} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <div className=" text-blue-600 font-bold text-lg">
                <span className="mr-1">↑</span>
                <span>14%</span>
                </div>
                <span className="text-sm text-black font-medium ml-1">This week</span>
              </div>
            </div>
            <div className="">
              <h1 className=" text-lg font-bold">Issues Fixed</h1>
              <h1 className=" text-3xl font-bold">500K+</h1>
            </div>
          </div>
          
        </div>
        <div className=" h-72 absolute bottom-0 -left-16 w-1/2">
            <img
              src={Substract}
              alt="CodeAnt Illustration"
              className="object-contain w-full h-full"
            />
          </div>
      </div>

      {/* Sign In Panel */}
      <div className="w-full lg:w-1/2 flex items-center bg-grayBg justify-center p-8">
        <div className="w-full max-w-xl space-y-8 bg-white shadow-xl py-5 px-10 rounded-3xl">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="CodeAnt AI" className="w-8 h-8" />
              <h1 className="text-3xl font-light">CodeAnt AI</h1>
            </div>
            <h1 className=" text-4xl font-semibold mb-8">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Mode Toggle */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setMode("saas")}
              className={`flex-1 py-2 text-base font-medium rounded-md ${
                mode === "saas"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setMode("self-hosted")}
              className={`flex-1 py-2 text-base font-medium rounded-md ${
                mode === "self-hosted"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Self Hosted
            </button>
          </div>

          {/* Sign In Buttons */}
          <div className="space-y-3">
            {mode === "saas" ? (
              <>
                <button onClick={handleSignin}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-100">
                  <img src={githubIcon} alt="" />
                  Sign in with Github
                </button>
                <button onClick={handleSignin} className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-100">
                  <img src={bitbucketIcon} alt="" />
                  Sign in with Bitbucket
                </button>
                <button onClick={handleSignin} className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-100">
                  <img src={azureDevopsIcon} alt="" />
                  Sign in with Azure Devops
                </button>
                <button onClick={handleSignin} className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-100">
                  <img src={gitlabIcon} alt="" />
                  Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button onClick={handleSignin} className="flex gap-2 items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src={gitlabIcon} alt="" />
                  Self Hosted GitLab
                </button>
                <button onClick={handleSignin} className="flex gap-2 items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src={key} alt="" />
                  Sign in with SSO
                </button>
              </>
            )}
          </div>

          {/* Privacy Policy */}
          <div className="text-center text-sm text-gray-600">
            By signing up you agree to the{" "}
            <button className="text-blue-600 hover:underline">
              Privacy Policy
            </button>
            .
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
