package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public String addTask(@RequestParam String taskName,
                          @RequestParam String description,
                          @RequestParam Date date,
                          @RequestParam Priority priority,
                          @RequestParam boolean status) {
        this.taskService.addTask(taskName, description, date, priority, status);
        return "dailyTasks";
    }

//    @PostMapping
//    public String editTask(Long id, Model model) {
//        if (this.taskService.findById(id).isPresent()) {
//            Task task = this.taskService.findById(id).get();
//            model.addAttribute("task", task);
//            return "taskForm";
//        }
//        return "redirect:/dailyTasks?error=taskNotFound";
//    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Long id) {
        this.taskService.deleteTask(id);
        return "dailyTasks";
    }

}
