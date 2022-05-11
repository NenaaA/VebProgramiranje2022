import HomeLayout from "../../ui/layout/home-layout/HomeLayout";
import DailyTasks from "../dailyTasks/dailyTasks";
import {Route, Routes} from "react-router-dom";
import HomePage from "../home/home";
import React from "react";
import Login from "../auth/login/login";
import Logout from "../auth/logout/logout";
import Register from "../auth/register/register";
import AuthLayout from "../../ui/layout/auth-layout/AuthLayout";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout>
                <Login/>
            </AuthLayout>}/>

            <Route path="/logout" element={<HomeLayout>
                <Logout/>
            </HomeLayout>}/>

            <Route path="/register" element={<AuthLayout>
                <Register/>
            </AuthLayout>}/>

            <Route path="/miscellaneous" element={<AuthLayout>
                <Register/>
            </AuthLayout>}/>

            <Route path="/inprogress" element={<AuthLayout>
                <Register/>
            </AuthLayout>}/>

            <Route path="/finished" element={<AuthLayout>
                <Register/>
            </AuthLayout>}/>


            <Route path="/home" element={<React.Fragment>
                <HomeLayout>
                    <HomePage/>
                </HomeLayout>
            </React.Fragment>}/>
            <Route path="daily-tasks" element={<HomeLayout>
                <DailyTasks/>
            </HomeLayout>}/>
        </Routes>
    );
}

export default App;

