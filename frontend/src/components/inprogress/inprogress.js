import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {PendingOutlined} from "@mui/icons-material";
import Task from "../task/task";
import TaskForm from "../task/task-form/TaskForm";

const InProgress = () => {
    const tasks=[
        {id: 1, data:{name:"Do Assignment", description:"Do Web Programming assignment", priority:1, completed:false}},
        {id: 2, data:{name:"Clean apartment", description:"", priority:3, completed:false}},
        {id: 3, data:{name:"Finish Project", description: "Finish Web Programming project", priority: 1, completed: false}},
        {id: 4, data:{name:"Water Plants", description: "A lot of water for aloe, little water for orchid", priority: 2, completed: false}}
    ]

    const [addTask, setAddTask] = useState(false);

    return (
        <Box sx={{marginLeft:"13em", marginRight:"3em"}}>
            <Grid item container
                  justifyContent={"space-between"}
                  alignItems={"center"} mb={3}
                  xs={12}>
                <Grid item xs={10}>
                    <Typography style={{
                        fontSize: "40px",
                        textShadow: "1px 1px 1px darkgray"
                    }}><PendingOutlined style={{
                        fontSize: "40px",
                        marginRight: "10px"
                    }}/>In Progress</Typography>
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

export default InProgress;