import {Button, FormControl, InputAdornment, TextField, Typography} from "@mui/material";

const Register = () => {
    return(
        <>
            <Typography variant={"subtitle1"}>Register</Typography>
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

                <Typography variant={"body2"}>
                    Repeat Password
                </Typography>
                <TextField variant={"outlined"}
                           type={"password"}
                           InputProps={{
                               startAdornment: <InputAdornment position="start">
                                   see
                               </InputAdornment>,
                           }}/>

                <Typography variant={"body2"}>
                    Name
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>

                <Typography variant={"body2"}>
                    Surname
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>

                <Typography variant={"body2"}>
                    Date of birth
                </Typography>
                <TextField variant={"outlined"} type={"date"}/>

                <Typography variant={"body2"}>
                    Email
                </Typography>
                <TextField variant={"outlined"} type={"email"}/>

                <Button variant="contained" type={"submit"}>Submit</Button>
            </FormControl>
        </>
    );
}

export default Register;