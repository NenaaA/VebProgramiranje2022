package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import java.util.Date;
import java.util.Optional;

public interface DailyTasksService {

    Optional<DailyTasks> showTasks(Date date);
    void addTaskToDailyTasks(Long taskId, String taskName, String description, Date date, Priority priority, boolean status);
}
