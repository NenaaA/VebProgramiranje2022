import React, {useState} from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import {DirectionsRunOutlined} from "@mui/icons-material";
import Task from "../task/task";
import TaskForm from "../task/task-form/TaskForm";

const Miscellaneous = () => {
    const tasks=[
        {id: 3, data:{name:"Finish Project", description: "Finish Web Programming project", priority: 1, completed: false}},
        {id: 1, data:{name:"Go running", description:"Go running for 30 minutes", priority:3, completed:true}},
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
                    }}><DirectionsRunOutlined style={{
                        fontSize: "40px",
                        marginRight: "10px"
                    }}/>Miscellaneous</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined"
                            onClick={() => setAddTask(true)}
                            type={"submit"}
                            style={{ display:"flex", justifySelf:"flex-end"}}>Add Task</Button>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                {tasks.map((task) => (
                    <Grid item key={"task-item-" + task.id} xs={12} md={6} lg={4}>
                        <Task data={task.data}/>
                    </Grid>
                ))}
                <Grid item xs={12} lg={4}>
                    {addTask ? <TaskForm/> : null}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Miscellaneous;