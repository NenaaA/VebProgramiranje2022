import {
    Button, Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Paper, Radio,
    RadioGroup,
    TextareaAutosize,
    TextField
} from "@mui/material";
import {Check} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";
import Task from "../task";

const TaskForm = () => {
    const [editMode, setEditMode] = useState(true);
    const [taskState, setTaskState] = useState({
        name: "",
        description: "",
        priority: 3,
        completed: false
    })

    const onSaveTask = () => {
        setEditMode(false);
    }

    const handleChangeState = (e) => {
        setTaskState({
            ...taskState,
            [e.target.name]: [e.target.value]
        })
    }

    return (
        <>
            {editMode ?
                <Paper sx={{
                    padding: "10px",
                    margin: "15px",
                    border: "solid 5px #ffb19c"
                }} elevation={5}>

                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                        <Grid item sx={{
                            padding: "10px 7px",
                            margin: "10px"
                        }}>
                            <TextField fullWidth
                                       sx={{width: "20em"}}
                                       value={taskState.name}
                                       name={"name"}
                                       onChange={(e) => handleChangeState(e)}/>
                        </Grid>
                        <Grid item>
                            <Checkbox value={taskState.completed}
                                      name={"completed"}
                                      onChange={(e) => handleChangeState(e)}/>
                        </Grid>
                    </Grid>
                    <Divider/>

                    <Grid sx={{
                        padding: "10px 7px",
                        margin: "10px"
                    }}>
                        <TextareaAutosize style={{width: "300px", height: "100px", padding: "10px"}}
                                          value={taskState.description} name={"description"}
                                          onChange={(e) => handleChangeState(e)}
                        />
                    </Grid>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                            padding: "4px 10px",
                        }}>
                        <FormControlLabel value={3}
                                          name={"priority"}
                                          control={<Radio/>}
                                          label="low"/>
                        <FormControlLabel value={2}
                                          name={"priority"}
                                          control={<Radio/>}
                                          label="medium"/>
                        <FormControlLabel value={1}
                                          name={"priority"}
                                          control={<Radio/>}
                                          label="high"/>
                    </RadioGroup>


                    <Grid container justifyContent={"space-between"}>
                        <Grid item sx={{
                            padding: "10px 7px",
                            margin: "10px"
                        }}>
                            <Button variant="outlined" startIcon={<Check/>} onClick={onSaveTask}>
                                Save
                            </Button>
                        </Grid>

                        <Grid item sx={{
                            padding: "10px 7px",
                            margin: "10px"
                        }}>
                            <Button variant="outlined" startIcon={<DeleteIcon/>}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>

                </Paper> :
                <Task data={taskState}/>}
        </>
    );
}

export default TaskForm;