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
    @Transactional //moze ke treba da vrati Optional
    public Task addTask(String taskName, String description, Date date, Priority priority, boolean status) {
        if (taskName == null || taskName.isEmpty()) {
            throw new InvalidArgumentException();
        }

        Task addNewTask = new Task(taskName, description, date, priority, status);
        return this.taskRepository.save(addNewTask);

    }

    @Override
    public Optional<Task> saveTask(TaskDto taskDto) throws Exception  {

        String date = taskDto.getDate();
        Date newDate = new SimpleDateFormat("dd/mm/yyyy").parse(date);

        return Optional.of(this.taskRepository.save(new Task(taskDto.getTaskName(), taskDto.getDescription(),
                newDate, taskDto.getPriority(), taskDto.isStatus())));

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
        task.setStatus(taskDto.isStatus());

        //so date exception mozebi

        return Optional.of(this.taskRepository.save(task));
    }

    @Override
    public void deleteTask(Long taskId) {
        this.taskRepository.deleteById(taskId);
    }

}
