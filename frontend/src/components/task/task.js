import {
    Button, Checkbox,
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
import {Circle} from "@mui/icons-material";
import {setPriorityColor, setPriorityTitle} from "../../ui/functions/Functions";

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);

    const onEditTask = () => {
        setEditMode(true);
    }

    return (
        <>
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
                        {editMode ?
                            <TextField fullWidth value={props.data.name}/> :
                            <Typography variant={"h6"}>{props.data.name}</Typography>
                        }
                    </Grid>
                    <Grid item>
                        {props.data.completed ? <Checkbox defaultChecked/> :
                            <Checkbox/>}
                    </Grid>
                </Grid>
                <Divider/>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    {!editMode ?
                        <Paper style={{
                            width: 400,
                            height: 100,
                            padding: 10
                        }}>
                            {props.data.description}
                        </Paper> :
                        <TextareaAutosize style={{width: "400px", height: "100px", padding: "10px"}}
                                          value={props.data.description}/>
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
                    <Grid container alignItems={"center"}>
                        <Circle color={setPriorityColor(props.data.priority)} sx={{marginX: "0.8em"}}/>
                        <Typography variant={"subtitle2"}>{setPriorityTitle(props.data.priority)} Priority</Typography>
                    </Grid>
                }


                <Grid container justifyContent={"space-between"}>
                    <Grid item sx={{
                        padding: "10px 7px",
                        margin: "10px"
                    }}>
                        <Button variant="outlined" startIcon={<EditIcon/>} onClick={onEditTask}>
                            {editMode ? "Save" : "Edit"}
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

                </Grid>

            </Paper>
        </>
    );
}

export default Task;

