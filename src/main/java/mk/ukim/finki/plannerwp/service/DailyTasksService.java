package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.Task;

import java.util.Date;
import java.util.List;

public interface DailyTasksService {

    List<Task> showTasks(Date date);
}
