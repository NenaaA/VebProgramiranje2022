import axios from '../custom-axios/axios'

export const TaskService = {
    fetchTasks: (date) => {
        return axios.get(`/api/dailyTasks/date/${date}`)
    }
}