import {
    Button,
    Divider,
    FormControlLabel,
    Grid,
    Paper, Radio,
    RadioGroup,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import {Done} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";

const TaskForm = () => {
    const [editMode, setEditMode] = useState(true);

    const onEditTask = () => {
        setEditMode(true);
        //handleChangeName();
    }

    // const handleChangeName = (e) => {
    //     (e.target.value);
    // }
    //
    // const handleChangeDescription = (e) => {
    //     setTaskContent(e.target.value);
    // }

    return (
        <>
            <Paper sx={{
                padding: "10px",
                margin: "10px",
                border: "solid 5px #ffb19c",
                //boxShadow: "4px 4px 10px #FF714B "
            }} elevation={5}>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    {editMode &&
                    <TextField fullWidth
                               //value=//{taskName}
                               //onChange={(e) => handleChangeName(e)}
                    />}

                </Grid>
                <Divider/>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    <TextareaAutosize style={{width: "300px", height: "100px", padding: "10px"}}
                                      //value={taskContent}
                                      //onChange={(e) => handleChangeDescription(e)}
                     />
                </Grid>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                        padding: "4px 10px",
                    }}>

                    <FormControlLabel value="low" control={<Radio/>} label="low"/>
                    <FormControlLabel value="medium" control={<Radio/>} label="medium"/>
                    <FormControlLabel value="high" control={<Radio/>} label="high"/>
                </RadioGroup>


                <Grid container justifyContent={"space-between"}>
                    <Grid item sx={{
                        padding: "10px 7px",
                        margin: "10px"
                    }}>
                        <Button variant="outlined" startIcon={<EditIcon/>} onClick={onEditTask}>
                            Edit
                        </Button>
                    </Grid>

                    <Grid item sx={{
                        padding: "10px 7px",
                        margin: "10px"
                    }}>
                        <Button variant="outlined" startIcon={<DeleteIcon/>}>
                            Delete
                        </Button>
                    </Grid>

                    <Grid item sx={{
                        padding: "10px 7px",
                        margin: "10px"
                    }}>
                        <Button variant="outlined" startIcon={<Done/>}>
                            Finished
                        </Button>
                    </Grid>

                </Grid>

            </Paper>
        </>
    );
}

export default TaskForm;