package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.dto.TaskDto;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.model.exceptions.InvalidArgumentException;
import mk.ukim.finki.plannerwp.model.exceptions.TaskIdNotFoundException;
import mk.ukim.finki.plannerwp.repository.jpa.TaskRepository;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    @Transactional
    public Task addTask(String taskName, String description, Date date, Priority priority, boolean completed) {
        if (taskName == null || taskName.isEmpty()) {
            throw new InvalidArgumentException();
        }

        Task addNewTask = new Task(taskName, description, date, priority, completed);
        return this.taskRepository.save(addNewTask);

    }

    @Override
    public Optional<Task> saveTask(TaskDto taskDto) throws Exception  {

        String date = taskDto.getDate();
        Date newDate = new SimpleDateFormat("dd/MM/yyyy").parse(date);
        Priority priority = Priority.LOW;
        if(taskDto.getPriority() == 2){
            priority = Priority.MEDIUM;
        } if(taskDto.getPriority() == 3){
            priority = Priority.HIGH;
        }

        return Optional.of(this.taskRepository.save(new Task(taskDto.getTaskName(),
                taskDto.getDescription(),
                newDate, priority, taskDto.isCompleted())));

    }

    @Override
    @Transactional
    public Task editTask(Long taskId, String taskName, String description, Date date, Priority priority, boolean status) {
        if (taskName == null || taskName.isEmpty()) {
            throw new InvalidArgumentException();
        }
        this.taskRepository.deleteById(taskId);

        Task editedTask = new Task(taskName, description, date, priority, status);
        return this.taskRepository.save(editedTask);

    }

    @Override
    public Optional<Task> editTask(Long id, TaskDto taskDto) {
        Task task = this.taskRepository.findById(id).orElseThrow(() -> new TaskIdNotFoundException(id));

        task.setTaskName(taskDto.getTaskName());
        task.setDescription(taskDto.getDescription());
        task.setCompleted(taskDto.isCompleted());

        String date = taskDto.getDate();
        Date newDate = null;
        try {
            newDate = new SimpleDateFormat("dd/MM/yyyy").parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        task.setDate(newDate);

        return Optional.of(this.taskRepository.save(task));
    }

    @Override
    public void deleteTask(Long taskId) {
        this.taskRepository.deleteById(taskId);
    }

}
