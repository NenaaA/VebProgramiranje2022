import CustomDrawer from "../../drawer/CustomDrawer";
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {PersonOutline} from "@mui/icons-material";
import LogoutMenu from "../../../components/auth/logout/logout-menu/LogoutMenu";
import Logout from "../../../components/auth/logout/logout";

const HomeLayout = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }

    const handleClose = () => {
        setOpenMenu(false);
        setAnchorEl(null);
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
                            <LogoutMenu open={openMenu}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        setOpenLogout={() => setOpenLogoutDialog(true)}/>
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
            <Logout open={openLogoutDialog}
                    onClose={() => setOpenLogoutDialog(false)}/>
        </React.Fragment>
    );
}

export default HomeLayout;