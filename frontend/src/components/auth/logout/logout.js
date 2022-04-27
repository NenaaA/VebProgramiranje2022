import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";

const Logout = () => {

    function yesPage() {
 //treba redirect do login page
    }

    const [openDialog, setOpenDialog] = useState(true)

    const closeDialog = () => {
        setOpenDialog(false);
    }


    return (
        <>
            <Dialog
                open={openDialog}
                onClose={closeDialog}
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
                    <Button onClick={closeDialog} autoFocus>No</Button>
                </DialogActions>

            </Dialog>
        </>
    );


}

export default Logout;

