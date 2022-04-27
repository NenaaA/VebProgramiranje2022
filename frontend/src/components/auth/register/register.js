import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import AlternativeActionButtons from "../../../ui/alternative-action-buttons/AlternativeActionButtons";
import {useState} from "react";
import RegisterPasswords from "./RegisterPasswords";

const Register = (props) => {
    const [enterPassword, setEnterPassword] = useState(false);

    return (
        !enterPassword ?
        <>
            <Box justifyContent={"center"} display={"flex"} mb={3}>
                <Typography variant={"h6"}>Register</Typography>
            </Box>
            <FormControl>
                <Typography variant={"body2"} mt={2}>
                    Name
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>

                <Typography variant={"body2"} mt={2}>
                    Surname
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>

                <Typography variant={"body2"} mt={2}>
                    Username
                </Typography>
                <TextField variant={"outlined"} type={"text"}/>

                <Typography variant={"body2"} mt={2}>
                    Email
                </Typography>
                <TextField variant={"outlined"} type={"email"}/>

                <Typography variant={"body2"} mt={2}>
                    Date of birth
                </Typography>
                <TextField variant={"outlined"} type={"date"}/>

                <Box justifyContent={"center"} display={"flex"}>
                    <Button variant="contained"
                            onClick={() => setEnterPassword(true)}
                            type={"submit"}
                            sx={{marginTop: "2em", width: "100%"}}>Create Password</Button>
                </Box>
            </FormControl>
            <AlternativeActionButtons login={false} handleButtonClick={props.handleLoginClick}/>
        </> :
            <RegisterPasswords/>
    );
}

export default Register;