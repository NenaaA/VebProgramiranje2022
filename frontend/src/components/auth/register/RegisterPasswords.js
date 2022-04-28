import {Box, Button, Divider, FormControl, Paper, TextField, Typography} from "@mui/material";
import React from "react";

const RegisterPasswords = () => {
    return (
        <>
            <Paper style={{
                border: "1px solid #066594",
                padding: "30px 70px"
            }}>
                <Box justifyContent={"center"} display={"flex"} mb={3}>
                    <Typography variant={"h6"}>Enter your password</Typography>
                </Box>

                <Divider/>

                <FormControl style={{
                    marginTop: "45px",
                    marginBottom: "20px",
                    width: "300px"
                }}>
                    <Typography variant={"body2"} mt={2}>
                        Password
                    </Typography>
                    <TextField variant={"outlined"}
                               type={"password"}/>

                    <Typography variant={"body2"} mt={2}>
                        Repeat Password
                    </Typography>
                    <TextField variant={"outlined"}
                               type={"password"}/>
                    <Box justifyContent={"center"} display={"flex"}>
                        <Button variant="contained"
                                type={"submit"}
                                sx={{marginTop: "2em", width: "300px"}}>Submit</Button>
                    </Box>
                </FormControl>
            </Paper>
        </>
    )
}

export default RegisterPasswords;