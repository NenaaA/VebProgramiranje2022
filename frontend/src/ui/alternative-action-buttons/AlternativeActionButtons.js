import {Button, Divider, Grid} from "@mui/material";

const AlternativeActionButtons = (props) => {
    return (
        <>
            <Grid container justifyContent={"center"} direction={"column"}>
                <Grid item xs={12} mt={"1.5em"}>
                    {props.login ?
                        <Divider>Don't have an account?</Divider> :
                        <Divider>Already have an account?</Divider>}
                </Grid>
                <Grid item xs={12}
                      container
                      justifyContent={"center"}
                      mt={"1.5em"}>
                    <Button variant={"contained"}
                            sx={{width: "60%"}}>
                        {props.login ? "Register" : "Login"}</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default AlternativeActionButtons;