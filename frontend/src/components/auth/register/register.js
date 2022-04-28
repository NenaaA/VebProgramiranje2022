import {Box, Button, Divider, FormControl, Paper, TextField, Typography} from "@mui/material";
import AlternativeActionButtons from "../../../ui/alternative-action-buttons/AlternativeActionButtons";
import React, {useState} from "react";
import RegisterPasswords from "./RegisterPasswords";

const Register = (props) => {
    const [enterPassword, setEnterPassword] = useState(false);

    return (
        !enterPassword ?
            <>
                <Paper style={{
                    border: "1px solid #066594",
                    padding: "30px 100px"
                }}>
                    <Box justifyContent={"center"} display={"flex"} mb={2} mt={2}>
                        <Typography variant={"h6"} >Register</Typography>
                    </Box>

                    <Divider/>

                    <FormControl style={{
                        marginTop: "30px",
                        width: "300px"
                    }}>
                        <Typography variant={"body2"} mt={3}>
                            Name
                        </Typography>
                        <TextField variant={"outlined"} type={"text"} />

                        <Typography variant={"body2"} mt={3}>
                            Surname
                        </Typography>
                        <TextField variant={"outlined"} type={"text"}/>

                        <Typography variant={"body2"} mt={3}>
                            Username
                        </Typography>
                        <TextField variant={"outlined"} type={"text"}/>

                        <Typography variant={"body2"} mt={3}>
                            Email
                        </Typography>
                        <TextField variant={"outlined"} type={"email"}/>

                        <Typography variant={"body2"} mt={3}>
                            Date of birth
                        </Typography>
                        <TextField variant={"outlined"} type={"date"}/>

                        <Box justifyContent={"center"} display={"flex"}>
                            <Button variant="contained"
                                    onClick={() => setEnterPassword(true)}
                                    type={"submit"}
                                    sx={{marginTop: "2em", width: "100%"}}>Create Password</Button>
                        </Box>

                        <Divider style={{
                            margin: "30px"
                        }}/>

                    </FormControl>

                    <AlternativeActionButtons login={false} handleButtonClick={props.handleLoginClick}/>

                </Paper>

            </> :
            <RegisterPasswords/>
    );
}

export default Register;