import HomeLayout from "../../ui/layout/home-layout/HomeLayout";
import Task from "../task/task";
import {Route, Router} from "react-router-dom";
import HomePage from "../home/home";
import Register from "../auth/register/register";
import Logout from "../auth/logout/logout";
import Login from "../auth/login/login";
import RegisterPasswords from "../auth/register/RegisterPasswords";
import DailyTasks from "../dailyTasks/dailyTasks";
import AuthLayout from "../../ui/layout/auth-layout/AuthLayout";
import Auth from "../auth/Auth";

function App() {
    return (

        <HomeLayout>
            <DailyTasks/>
        </HomeLayout>

    );
}

export default App;


//
// <Router>
//     <Route path={"/home"}>
//         <HomeLayout>
//             <HomePage/>
{/*</HomeLayout>*/
}
{/*    </Route>*/
}
{/*    <Route path={"/daily-tasks"}>*/
}
{/*        <HomeLayout>*/
}
{/*            <Task/>*/
}
{/*        </HomeLayout>*/
}
{/*    </Route>*/
}
{/*</Router>*/
}
