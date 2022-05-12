import {ListItemIcon, Menu, MenuItem} from "@mui/material";
import {LogoutOutlined, Settings} from "@mui/icons-material";

const LogoutMenu = (props) => {
    return (
        <>
            <Menu
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.onClose} onBlur={props.onClose}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={props.setOpenLogout}>
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