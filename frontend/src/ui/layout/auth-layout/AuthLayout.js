import {Box, Paper} from "@mui/material";

const AuthLayout = ({children}) => {
    return (
        <>
            <Box justifyContent={"center"} display={"flex"} height="100vh" sx={{backgroundColor:"#EEF4FF"}}>
                <Paper sx={{padding:"5em", marginTop:"5em", position:"fixed"}}>
                    {children}
                </Paper>
            </Box>
        </>
    )
}

export default AuthLayout;
