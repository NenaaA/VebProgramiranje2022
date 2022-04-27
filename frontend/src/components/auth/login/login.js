import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import AlternativeActionButtons from "../../../ui/alternative-action-buttons/AlternativeActionButtons";

const Login = (props) => {
    const [seePassword, setSeePassword] = useState(false);

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    }

    return (
        <>
            <Box justifyContent={"center"} display={"flex"} mb={3}>
                <Typography variant={"h6"}>Login</Typography>
            </Box>
            <FormControl>
                <Typography variant={"body2"}>
                    Username
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>
                <Typography variant={"body2"} mt={2}>
                    Password
                </Typography>
                <TextField variant={"outlined"}
                           type={seePassword ? "text" : "password"}
                           InputProps={{
                               endAdornment: <InputAdornment position="end">
                                   <IconButton onClick={handleSeePassword}>
                                       {seePassword ? <VisibilityOff/> : <Visibility/>}
                                   </IconButton>
                               </InputAdornment>,
                           }}/>
                <Box justifyContent={"center"} display={"flex"}>
                    <Button variant={"contained"}
                            sx={{marginTop: "2em", width: "60%"}}>
                        Login</Button>
                </Box>
            </FormControl>
            <AlternativeActionButtons login={true} handleButtonClick={props.handleRegisterClick}/>
        </>
    );
}

export default Login;