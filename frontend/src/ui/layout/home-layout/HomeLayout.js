import CustomDrawer from "../../drawer/CustomDrawer";
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {PersonOutline} from "@mui/icons-material";
import LogoutMenu from "../../../components/auth/logout/logout-menu/LogoutMenu";

const HomeLayout = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    return (
        <React.Fragment>
            <AppBar position={"fixed"}
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        padding: "0.6em",
                        backgroundColor: "#066594"
                    }}>
                <Grid container justifyContent={"space-between"} spacing={2}>
                    <Grid item sx={{marginLeft: "0.5em"}}>
                        <Typography variant="h6">
                            Planner
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleOpenMenu}>
                            <PersonOutline sx={{color:"white", marginRight: "0.5em"}}/>
                            <LogoutMenu/>
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
            <Grid container>
                <Grid item>
                    <CustomDrawer/>
                </Grid>
                <Grid item>
                    <Box component="main" sx={{ flexGrow: 1, padding:"3em"}}>
                        <Toolbar/>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default HomeLayout;