import {FormControl, InputAdornment, TextField, Typography} from "@mui/material";

const Login = () => {
    return(
        <>
            <Typography variant={"subtitle1"}>Login</Typography>
            <FormControl>
                <Typography variant={"body2"}>
                    Username
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>
                <Typography variant={"body2"}>
                    Password
                </Typography>
                <TextField variant={"outlined"}
                           type={"password"}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">
                                   see
                               </InputAdornment>,
                }}/>
            </FormControl>
        </>
    );
}

export default Login;