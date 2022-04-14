package mk.ukim.finki.plannerwp.web.rest;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


//    @PostMapping ("/add")
//    public ResponseEntity<Task> addTask(@RequestParam String taskName,
//                                        @RequestParam String description,
//                                        @RequestParam Date date,
//                                        @RequestParam Priority priority,
//                                        @RequestParam boolean status) {
//        return this.taskService.addTask(taskName, description, date, priority, status)
//                .map(newTask -> ResponseEntity.ok().body(newTask))
//                .orElseGet(() -> ResponseEntity.badRequest().build());
//    }
//
//    @PostMapping("/edit-form/{id}")
//    public String editTask(@PathVariable Long id,
//                           @RequestParam String taskName,
//                           @RequestParam String description,
//                           @RequestParam Date date,
//                           @RequestParam Priority priority,
//                           @RequestParam boolean status) {
//        return this.taskService.editTask(id, taskName, description, date, priority, status)
//                .map(edited -> ResponseEntity.ok().body(edited))
//                .orElseGet(() -> ResponseEntity.badRequest().body());
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.taskService.deleteTask(id);
        if(this.taskService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}
