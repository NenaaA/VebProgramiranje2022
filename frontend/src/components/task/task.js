import {
    Button,
    Divider,
    FormControlLabel,
    Grid,
    Paper, Radio,
    RadioGroup, TextareaAutosize, TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Circle, Done} from "@mui/icons-material";

//da dodadam check mark na taskot

const Task = () => {
    const [taskContent, setTaskContent] = useState("Task description");
    const [taskName, setTaskName] = useState("Task name");
    const [editMode, setEditMode] = useState(false);

    const onEditTask = () => {
        setEditMode(true);
        handleChangeName();
        setTaskContent("Hello");
    }

    // const deleteTask = () => {
    //
    // }

    const handleChangeName = (e) => {
        setTaskName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setTaskContent(e.target.value);
    }

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
                    {!editMode ?
                        <Typography variant={"h6"}>{taskName}</Typography> :
                        <TextField fullWidth value={taskName}
                                   onChange={(e) => handleChangeName(e)}/>}

                </Grid>
                <Divider/>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    {!editMode ?
                        <Paper style={{
                            width: 300,
                            height: 100,
                            padding: 10
                        }}>
                            {taskContent}
                        </Paper> :
                        <TextareaAutosize style={{width: "300px", height: "100px", padding: "10px"}}
                                          value={taskContent}
                                          onChange={(e) => handleChangeDescription(e)}/>
                    }
                </Grid>

                {editMode ?
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
                    </RadioGroup> :
                    <Circle sx={{color:"green", marginLeft:"0.8em"}}/>
                }


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

export default Task;

