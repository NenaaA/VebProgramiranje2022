package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.Task;

import java.util.Date;
import java.util.List;

public interface DailyTasksService {

    List<Task> showDailyTasksByDate(Date date);

    //ne e potrebno i onaka site taskovi ke se zemaat direktno od tasks bazata
    //void addTaskToDailyTasks(Long taskId, String taskName, String description, Date date, Priority priority, boolean status);
}
