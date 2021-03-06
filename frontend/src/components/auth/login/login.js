import {
    Box,
    Button, Divider,
    FormControl,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React, {useState} from "react";
import AlternativeActionButtons from "../../../ui/alternative-action-buttons/AlternativeActionButtons";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [seePassword, setSeePassword] = useState(false);
    const navigate = useNavigate();

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    }

    const handleLogin = () => {
        navigate(`/`);
    }

    return (
        <>
            <Box justifyContent={"center"} display={"flex"} mb={3}>
                <Typography variant={"h6"}>Login</Typography>
            </Box>

            <Divider style={{
                margin: "20px"
            }}/>

            <FormControl style={{
                marginTop: "45px",
                marginBottom: "20px",
                width: "300px"
            }}>
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
                            onClick={handleLogin}
                            sx={{marginTop: "2em", width: "200px"}}>
                        Login</Button>
                </Box>

            </FormControl>

            <AlternativeActionButtons login={true} handleButtonClick={props.handleRegisterClick}/>
        </>
    );
}

export default Login;