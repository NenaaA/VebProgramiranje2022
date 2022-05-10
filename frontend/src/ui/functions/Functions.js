export const setPriorityColor = (priority) => {
    if(priority === 3){
        return "success"
    }
    if(priority === 2){
        return "warning"
    }
    if(priority === 1){
        return "error"
    }
}

export const setPriorityTitle = (priority) => {
    if(priority === 3){
        return "Low"
    }
    if(priority === 2){
        return "Medium"
    }
    if(priority === 1){
        return "High"
    }
}