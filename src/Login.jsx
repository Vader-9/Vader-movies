import { useState } from "react";

function Login(){

    const [account, setAccount] = useState(false)

    return(
        <div className="ml-[35%] mt-[10%] w-[500px] h-[500px] p-[20px] border">
            <h1 className="text-center">{account ? 'Sign in' : 'Create Account'}</h1>
            <p className="text-center">Don't have an account ? <a onClick={()=>setAccount(true)} className="cursor-pointer">{account ? "" : 'Create now'}</a></p>
            <div className="w-[460px] ">
                <p>Email</p>
                <input type="text"  placeholder="enter email" className="w-[100%] p-[8px] border"/>
            </div>
            <div className="w-[460px] ">
                <p>Password</p>
                <input type="text" placeholder="enter password" className="w-[100%] p-[8px] border" />
            </div>
            {account ? (
                <div className="w-[460px] ">
                    <p>User name</p>
                    <input type="text" placeholder="enter username" className="w-[100%] p-[8px] border" />
                </div>
            ) : ''}
            
            <div className="flex justify-center gap-[300px]">
                <input type="Radio" name="" id="" />
                <a href="">Forgot Password?</a>
            </div>
            <button>Continue</button>
            <div>
                <p>Continue with Google</p>
                <p>Continue with Facebook</p>
            </div>
        </div>
    )
}

export default Login;