import {updateObject} from "../../ui/update/updateObject";
import * as actionTypes from "../actionTypes";

const initial = {
    dailyTasks: []
}

const getTasks = (state, action) => {
    return updateObject(state, {dailyTasks: action.payload});
}

const taskReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_DAILY_TASKS:
            return getTasks(state, action);
        default:
            return state;
    }
}

export default taskReducer;