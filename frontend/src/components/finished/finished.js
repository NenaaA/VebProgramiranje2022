import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {Done} from "@mui/icons-material";
import Task from "../task/task";

const Finished = () => {
    const tasks=[
        {id: 1, data:{name:"Go running", description:"Go running for 30 minutes", priority:3, completed:true}},
        {id: 2, data:{name:"Buy Groceries", description: "Milk, olives, vegetables, snacks", priority: 2, completed: true}},
        {id: 3, data:{name:"Go to gym", description: "Cardio day", priority: 2, completed: true}},
        {id: 4, data:{name:"Do EMT lab exercise", description: "Do EMT laboratory exercise number 5", priority: 1, completed: true}}
    ]

    return (
        <Box  sx={{marginLeft:"13em", marginRight:"3em"}}>
            <Grid item container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{width: "80em"}} mb={3}
                  xs={12}>
                <Grid item xs={10}>
                    <Typography style={{
                        fontSize: "40px",
                        textShadow: "1px 1px 1px darkgray"
                    }}><Done style={{
                        fontSize: "40px",
                        marginRight: "10px"
                    }}/>Finished</Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                {tasks.map((task) => (
                    <Grid item key={"task-item-" + task.id} xs={12} md={6} lg={4}>
                        <Task data={task.data}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Finished;