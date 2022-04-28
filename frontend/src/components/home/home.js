import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/material";
import React from "react";


const HomePage = () => {
    return (
        <>
            <Box style={{
                border: "1px solid #066594",
                paddingLeft: "200px",
                paddingRight: "200px",
                paddingTop: "70px",
                paddingBottom: "50px",
                backgroundColor: "#066590",
                width: "100%",
                boxSizing: 'border-box',
                boxShadow: "5px 5px 5px #066590",
            }}>
                <Grid style={{
                    color: "white",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography style={{
                        fontSize: "40px",
                    }}>Welcome back</Typography>

                    <Typography style={{
                        fontSize: "25px",
                        marginTop: "50px",
                        marginBottom: "50px"
                    }}>Have all your tasks in one place</Typography>

                    <Typography style={{
                        fontSize: "20px",
                    }}>"Every single person I know who is successful at what they do is successful because they
                        love doing it." - Joe Penna</Typography>

                </Grid>

            </Box>

        </>
    );
}

export default HomePage;