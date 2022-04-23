import * as actionTypes from "../actionTypes";
import {TaskService} from "../../repository/service";

export const getDailyTasks = (date) => {
    return (dispatch) => {
        TaskService.fetchTasks(date)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_DAILY_TASKS,
                    payload: res.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
}