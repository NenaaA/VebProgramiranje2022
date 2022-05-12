import {updateObject} from "../../ui/update/updateObject";
import {GET_DAILY_TASKS} from "./taskActions";

const initial = {
    dailyTasks: []
}

const getTasks = (state, action) => {
    return updateObject(state, {dailyTasks: action.payload});
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_DAILY_TASKS:
            return getTasks(state, action);
        default:
            return state;
    }
}

export default taskReducer;