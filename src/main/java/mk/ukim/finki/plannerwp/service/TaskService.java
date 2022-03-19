package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface TaskService {

    List<Task> findAll();
    Optional<Task> findById(Long id);
    Task addTask(String taskName, String description, Date date, Priority priority, boolean status);
    Task editTask(Long taskId, String taskName, String description, Date date, Priority priority, boolean status);
    void deleteTask(Long taskId);
}
