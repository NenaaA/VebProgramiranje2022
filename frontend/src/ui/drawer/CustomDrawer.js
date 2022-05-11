import {Drawer, List, ListItemButton, Toolbar} from "@mui/material";
import {AssignmentOutlined, Check, PendingOutlined, TaskAltOutlined} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const CustomDrawer = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate(`/home`);
    }

    const handleDailyTaskClick = () => {
        navigate(`/daily-tasks`);
    }

    const handleInProgressClick = () => {
        navigate(`/in-progress`);
    }

    const handleFinishedClick = () => {
        navigate(`/finished`);
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: "12em",
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: "12em", boxSizing: 'border-box' },
            }}
            PaperProps={{sx:{backgroundColor: "#066594"}}}
        >
            <Toolbar/>
            <List>
                <ListItemButton sx={{color:"white", paddingY:"1em"}} onClick={handleHomeClick}><AssignmentOutlined sx={{marginRight:"0.3em"}}/>Home page</ListItemButton>
                <ListItemButton sx={{color:"white", paddingY:"1em"}} onClick={handleDailyTaskClick} fullWidth><TaskAltOutlined sx={{marginRight:"0.3em"}}/>All daily tasks</ListItemButton>
                {/*<ListItemButton sx={{color:"white", paddingY:"1em"}} onClick={handleRandomClick} fullWidth><DirectionsRunOutlined sx={{marginRight:"0.3em"}}/>Miscellaneous</ListItemButton>*/}
                <ListItemButton sx={{color:"white", paddingY:"1em"}} onClick={handleInProgressClick} fullWidth><PendingOutlined sx={{marginRight:"0.3em"}}/>In progress</ListItemButton>
                <ListItemButton sx={{color:"white", paddingY:"1em"}} onClick={handleFinishedClick} fullWidth><Check sx={{marginRight:"0.3em"}}/>Finished</ListItemButton>
            </List>
        </Drawer>
    );
}

export default CustomDrawer;