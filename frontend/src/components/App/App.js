import HomeLayout from "../../ui/layout/home-layout/HomeLayout";
import DailyTasks from "../dailyTasks/dailyTasks";
import {Route, Routes} from "react-router-dom";
import HomePage from "../home/home";
import React from "react";

function App() {
    return (
        <Routes>
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

