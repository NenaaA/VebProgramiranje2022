import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    function yesPage() {
        navigate(`/auth`)
    }

    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to logout?"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This will return you to the login page
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={yesPage}>Yes</Button>
                    <Button onClick={props.onClose} autoFocus>No</Button>
                </DialogActions>

            </Dialog>
        </>
    );


}

export default Logout;

