import {ListItemIcon, Menu, MenuItem} from "@mui/material";
import {LogoutOutlined, Settings} from "@mui/icons-material";

const LogoutMenu = () => {
    return (
        <>
            <Menu
                id="account-menu"
                open={false}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutOutlined fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default LogoutMenu;