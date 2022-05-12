import {useState} from "react";
import Login from "./login/login";
import Register from "./register/register";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            {isLogin ?
                <Login handleRegisterClick={() => setIsLogin(false)}/> :
                <Register handleLoginClick={() => setIsLogin(true)}
                          handleRegisterClick={() => setIsLogin(true)}/>}
        </>
    )
}

export default Auth;