import HomeLayout from "../../ui/layout/home-layout/HomeLayout";
import DailyTasks from "../dailyTasks/dailyTasks";
import {Route, Routes} from "react-router-dom";
import HomePage from "../home/home";
import React from "react";
import AuthLayout from "../../ui/layout/auth-layout/AuthLayout";
import Miscellaneous from "../miscellaneous/miscellaneous";
import InProgress from "../inprogress/inprogress";
import Finished from "../finished/finished";
import Auth from "../auth/Auth";

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout>
                <Auth/>
            </AuthLayout>}/>

            <Route path="/miscellaneous" element={<HomeLayout>
                <Miscellaneous/>
            </HomeLayout>}/>

            <Route path="/in-progress" element={<HomeLayout>
                <InProgress/>
            </HomeLayout>}/>

            <Route path="/finished" element={<HomeLayout>
                <Finished/>
            </HomeLayout>}/>


            <Route path="/home" element={<React.Fragment>
                <HomeLayout>
                    <HomePage/>
                </HomeLayout>
            </React.Fragment>}/>
            <Route path="/" element={<React.Fragment>
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

