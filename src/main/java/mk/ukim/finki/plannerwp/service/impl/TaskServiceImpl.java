package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.model.exceptions.InvalidArgumentException;
import mk.ukim.finki.plannerwp.repository.jpa.TaskRepository;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task addTask(String taskName, String description, Date date, Priority priority, boolean status) {
        if (taskName == null || taskName.isEmpty()) {
            throw new InvalidArgumentException();
        }

        Task addNewTask = new Task(taskName, description, date, priority, status);
        return this.taskRepository.save(addNewTask);

    }

    @Override
    public Task editTask(Long taskId, String taskName, String description, Date date, Priority priority, boolean status) {
        if (taskName == null || taskName.isEmpty()) {
            throw new InvalidArgumentException();
        }
        this.taskRepository.deleteById(taskId);

        Task editedTask = new Task(taskName, description, date, priority, status);
        return this.taskRepository.save(editedTask);

    }

    @Override
    public void deleteTask(Long taskId) {
        this.taskRepository.deleteById(taskId);
    }

}
