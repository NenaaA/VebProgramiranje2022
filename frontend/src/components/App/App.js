import HomeLayout from "../../ui/layout/home-layout/HomeLayout";
import Task from "../task/task";
import {Route, Router} from "react-router-dom";
import {Home} from "@mui/icons-material";

function App() {
    return (
        <Router>
            <Route path={"/home"}>
                <HomeLayout>
                    <Home/>
                </HomeLayout>
            </Route>
            <Route path={"/daily-tasks"}>
                <HomeLayout>
                    <Task/>
                </HomeLayout>
            </Route>
        </Router>
    );
}

export default App;
