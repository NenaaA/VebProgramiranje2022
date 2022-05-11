import React, {useState} from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import {TaskAltOutlined} from "@mui/icons-material";
import Task from "../task/task";
import TaskForm from "../task/task-form/TaskForm";

const DailyTasks = () => {
    const tasks=[
        {id: 1, data:{name:"Do Assignment", description:"Do Web Programming assignment", priority:1, completed:false}},
        {id: 2, data:{name:"Clean apartment", description:"", priority:3, completed:false}},
        {id: 3, data:{name:"Buy Groceries", description: "Milk, olives, vegetables, snacks", priority: 2, completed: true}},
        {id: 4, data:{name:"Feed pets", description: "Feed dog, cat and turtle", priority: 3, completed: true}}
    ]

    const [addTask, setAddTask] = useState(false);

    return (
        <Box sx={{marginLeft:"13em", marginRight:"3em"}}>
            <Grid item container
                  justifyContent={"space-between"}
                  alignItems={"center"} mb={3}
                  xs={12}>
                <Grid item>
                    <Typography style={{
                        fontSize: "40px",
                        textShadow: "1px 1px 1px darkgray"
                    }}><TaskAltOutlined style={{
                        fontSize: "40px",
                        marginRight: "10px"
                    }}/>Daily tasks</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined"
                            onClick={() => setAddTask(true)}
                            type={"submit"}
                            style={{
                                display:"flex", justifySelf:"flex-end"
                            }}>Add Task</Button>
                </Grid>
            </Grid>
            <Grid item container xs={12} lg={12}>
                {tasks.map((task) => (
                    <Grid item key={"task-item-" + task.id} xs={12} md={6} lg={4}>
                        <Task data={task.data}/>
                    </Grid>
                ))}
                <Grid item xs={12} lg={4}>
                    {addTask ? <TaskForm/> : null}
                </Grid>
            </Grid>

            {/*<Box style={{*/}
            {/*    fontStyle: "italic",*/}
            {/*    marginTop: "50px"*/}
            {/*}}>*/}
            {/*    <Typography>Tips:</Typography>*/}
            {/*    <Typography>Click the 'Add Task' button to add a task</Typography>*/}
            {/*    <Typography>Click the 'Edit' button to edit a task</Typography>*/}
            {/*    <Typography>Click the 'Delete' button to delete a task</Typography>*/}
            {/*    <Typography>Click the 'Finished' button if you have finished the task</Typography>*/}
            {/*</Box>*/}
        </Box>
    )
}

export default DailyTasks;