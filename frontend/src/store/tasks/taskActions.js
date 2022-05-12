import {TaskService} from "../../repository/service";

export const GET_DAILY_TASKS = "GET_DAILY_TASKS";

export const getDailyTasks = (date) => {
    return (dispatch) => {
        TaskService.fetchTasks(date)
            .then((res) => {
                dispatch({
                    type: GET_DAILY_TASKS,
                    payload: res.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
}