import {
    Button,
    Divider,
    FormControlLabel,
    Grid,
    Paper, Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


// const [taskContent, setTaskContent] = useState(false)
//
// const [taskName, setTaskName] = useState(false)
//
// const editTask = () => {
//     setTaskName(true)
//     setTaskContent(false)
// }
//
// const deleteTask = () => {
//
// }

//da dodadam date  option vo task
//da dodadam check mark na taskot

const Task = () => {
    return (
        <>
            <Paper sx={{
                padding: "10px",
                margin: "10px",
                boxShadow: "4px 4px 10px #FF714B "
            }}>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    <Typography variant={"body2"}> Task name </Typography>
                </Grid>
                <Divider c/>

                <Grid sx={{
                    padding: "10px 7px",
                    margin: "10px"
                }}>
                    <Paper style={{
                        width: 300,
                        height: 100,
                        padding: 10
                    }}>
                        Enter your content here
                    </Paper>
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
                        <Button variant="outlined" startIcon={<EditIcon/>}>
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

                </Grid>

            </Paper>
        </>
    );
}

export default Task;

