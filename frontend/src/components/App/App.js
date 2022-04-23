import Login from "../login/login";
import AuthLayout from "../../ui/layout/auth-layout/AuthLayout";

function App() {
    return (
        <>
            <AuthLayout>
                <Login/>
            </AuthLayout>
        </>
    );
}

export default App;
