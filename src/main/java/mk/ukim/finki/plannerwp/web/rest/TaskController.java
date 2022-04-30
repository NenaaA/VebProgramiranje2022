package mk.ukim.finki.plannerwp.web.rest;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.dto.TaskDto;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {
        return this.taskService.findById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

        @PostMapping ("/add")
    public ResponseEntity<Task> saveTask(@RequestBody TaskDto taskDto) throws Exception {
        return this.taskService.saveTask(taskDto)
                .map(newTask -> ResponseEntity.ok().body(newTask))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PostMapping("/edit-form/{id}")
    public ResponseEntity<Task> editTask(@PathVariable Long id, @RequestBody TaskDto taskDto) {
        return this.taskService.editTask(id, taskDto)
                .map(task -> ResponseEntity.ok().body(task))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.taskService.deleteTask(id);
        if (this.taskService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}
