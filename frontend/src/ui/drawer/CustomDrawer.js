import {Drawer, List, ListItem, Toolbar} from "@mui/material";
import {AssignmentOutlined, Check, DirectionsRunOutlined, PendingOutlined, TaskAltOutlined} from "@mui/icons-material";

const CustomDrawer = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: "12em",
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: "12em", boxSizing: 'border-box' },
            }}
            PaperProps={{sx:{backgroundColor: "#066594"}}} //3C8EB6 FF714B
        >
            <Toolbar/>
            <List sx={{color:"white"}}>
                <ListItem><TaskAltOutlined sx={{marginRight:"0.3em"}}/>All Tasks</ListItem>
                <ListItem><AssignmentOutlined sx={{marginRight:"0.3em"}}/>Daily</ListItem>
                <ListItem><DirectionsRunOutlined sx={{marginRight:"0.3em"}}/>Miscellaneous</ListItem>
                <ListItem><PendingOutlined sx={{marginRight:"0.3em"}}/>In progress</ListItem>
                <ListItem><Check sx={{marginRight:"0.3em"}}/>Finished</ListItem>
            </List>
        </Drawer>
    );
}

export default CustomDrawer;