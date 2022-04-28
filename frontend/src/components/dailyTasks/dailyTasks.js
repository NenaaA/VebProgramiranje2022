import React, {useState} from "react";
import {Box, Button, Divider, List, Typography} from "@mui/material";
import {Done} from "@mui/icons-material";
import Task from "../task/task";
import TaskForm from "../task/task-form/TaskForm";

const DailyTasks = () => {

    const [addTask, setAddTask] = useState(false);

    return (
        <>

            <Box>
                <Typography style={{
                    fontSize: "40px",
                    textShadow: "1px 1px 1px darkgray"
                }}><Done style={{
                    fontSize: "40px",
                    marginRight: "10px"
                }}/>Daily tasks</Typography>

                <Box style={{
                    fontStyle: "italic",
                    marginTop: "50px"
                }}>
                    <Typography>Tips:</Typography>
                    <Typography>Click the 'Add Task' button to add a task</Typography>
                    <Typography>Click the 'Edit' button to edit a task</Typography>
                    <Typography>Click the 'Delete' button to delete a task</Typography>
                    <Typography>Click the 'Finished' button if you have finished the task</Typography>
                </Box>

                <Divider/>

                <Button variant="outlined"
                        onClick={() => setAddTask(true)}
                        type={"submit"}
                        style={{
                            marginTop: "50px"
                        }}>Add Task</Button>

                <List sx={{color: "white"}}>

                </List>

                <Task/>
                {addTask? <TaskForm/>: null}
            </Box>
        </>
    )

}

export default DailyTasks;