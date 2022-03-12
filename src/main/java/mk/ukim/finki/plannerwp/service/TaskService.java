package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import java.util.Date;
import java.util.List;

public interface TaskService {

    List<Task> findAll();
    Task addTask(Long taskId, String taskName, String description, Date date, Priority priority, boolean status);
    Task editTask(Long taskId, String taskName, String description, Date date, Priority priority, boolean status);
    void deleteTask(Long taskId);
}
