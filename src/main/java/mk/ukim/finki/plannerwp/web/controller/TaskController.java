package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/taskForm")
    public String getHomePage() {
        return "taskForm";
    }

    @PostMapping //save method
    public String addTask(@RequestParam String taskName,
                          @RequestParam String description,
                          @RequestParam Date date,
                          @RequestParam Priority priority,
                          @RequestParam boolean status) {
        this.taskService.addTask(taskName, description, date, priority, status);
        return "redirect:/dailyTasks";
    }

    @PostMapping("/edit-form/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String editTask(@PathVariable Long id, Model model) {
        if (this.taskService.findById(id).isPresent()) {
            Task task = this.taskService.findById(id).get();
            model.addAttribute("task", task);
            return "taskForm";
        }
        return "redirect:/dailyTasks?error=taskNotFound";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Long id) {
        this.taskService.deleteTask(id);
        return "dailyTasks";
    }

}
