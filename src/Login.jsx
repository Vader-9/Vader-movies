import { useState } from "react";

function Login(){

    const [account, setAccount] = useState(false)

    return(
       <div className="ml-[35%] mt-[10%] w-[500px] h-[500px] p-[8px]">
  <div className="w-full h-full border border-white/20 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-white">
    <h1 className="text-center text-2xl font-bold mb-2">
      {account ? "Sign in" : "Create Account"}
    </h1>
    <p className="text-center mb-6 text-sm text-gray-300">
      Don't have an account?{" "}
      <a
        onClick={() => setAccount(true)}
        className="cursor-pointer text-blue-400 hover:underline"
      >
        {account ? "" : "Create now"}
      </a>
    </p>

    <div className="mb-4">
      <p className="mb-1">Email</p>
      <input
        type="text"
        placeholder="Enter email"
        className="w-full p-2 rounded-md border border-gray-400/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-4">
      <p className="mb-1">Password</p>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full p-2 rounded-md border border-gray-400/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {account ? (
      <div className="mb-4">
        <p className="mb-1">Username</p>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full p-2 rounded-md border border-gray-400/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    ) : null}

    <div className="flex justify-between items-center mb-6 text-sm">
      <label className="flex items-center gap-2">
        <input type="radio" className="accent-blue-500" />
        Remember me
      </label>
      <a href="#" className="text-blue-400 hover:underline">
        Forgot Password?
      </a>
    </div>

    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition mb-4">
      Continue
    </button>

    {account ? '': (<div className="space-y-2 text-center text-sm">
      <p className="cursor-pointer hover:text-blue-400">
        Continue with Google
      </p>
      <p className="cursor-pointer hover:text-blue-400">
        Continue with Facebook
      </p>
    </div>)}
  </div>
</div>
    )
}

export default Login;