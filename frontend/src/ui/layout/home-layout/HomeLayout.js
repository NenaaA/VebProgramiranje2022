import CustomDrawer from "../../drawer/CustomDrawer";
import {AppBar, Box, Grid, Toolbar, Typography} from "@mui/material";
import React from "react";
import {PersonOutline} from "@mui/icons-material";

const HomeLayout = ({children}) => {
    return (
        <>
            <AppBar position={"fixed"}
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        padding: "1em",
                        backgroundColor: "#066594"
                    }}>
                <Grid container justifyContent={"space-between"} spacing={2}>
                    <Grid item sx={{marginLeft: "0.5em"}}>
                        <Typography variant="h6">
                            Planner
                        </Typography>
                    </Grid>
                    <Grid item>
                        <PersonOutline sx={{marginRight: "0.5em"}}/>
                    </Grid>
                </Grid>
            </AppBar>
            <Grid container>
                <Grid item>
                    <CustomDrawer/>
                </Grid>
                <Grid item>
                    <Box component="main" sx={{ flexGrow: 1, padding:"5em"}}>
                        <Toolbar/>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default HomeLayout;