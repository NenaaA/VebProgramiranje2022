import {
    Box,
    Button, Divider,
    FormControl,
    IconButton,
    InputAdornment, Paper,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React, {useState} from "react";
import AlternativeActionButtons from "../../../ui/alternative-action-buttons/AlternativeActionButtons";

const Login = (props) => {
    const [seePassword, setSeePassword] = useState(false);

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    }

    return (
        <>
            <Paper style={{
                border: "1px solid #066594",
                padding: "30px 100px"
            }}>


                <Box justifyContent={"center"} display={"flex"} mb={3} mt={2}>
                    <Typography variant={"h6"}>Login</Typography>
                </Box>

                <Divider style={{
                    margin: "20px"
                }}/>

                <FormControl style={{
                    marginTop: "30px",
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
                                sx={{marginTop: "2em", width: "60%"}}>
                            Login</Button>
                    </Box>

                    <Divider style={{
                        margin: "30px",
                        marginBottom: "20px"
                    }}/>
                </FormControl>

            <AlternativeActionButtons login={true} handleButtonClick={props.handleRegisterClick}/>

            </Paper>
        </>
    );
}

export default Login;