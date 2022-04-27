import {Box, Button, FormControl, TextField, Typography} from "@mui/material";

const RegisterPasswords = () => {
    return (
        <>
            <Box justifyContent={"center"} display={"flex"} mb={3}>
                <Typography variant={"h6"}>Enter your password</Typography>
            </Box>
            <FormControl>
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
                            sx={{marginTop: "2em", width: "60%"}}>Submit</Button>
                </Box>
            </FormControl>
        </>
    )
}

export default RegisterPasswords;