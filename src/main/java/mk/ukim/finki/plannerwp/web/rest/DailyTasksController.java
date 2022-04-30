package mk.ukim.finki.plannerwp.web.rest;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/dailyTasks")
@CrossOrigin(origins = "http://localhost:3000")
public class DailyTasksController {

    private final DailyTasksService dailyTasksService;

    public DailyTasksController(DailyTasksService dailyTasksService) {
        this.dailyTasksService = dailyTasksService;
    }

    @GetMapping("/date/{todayDate}")
    public List<Task> getDailyTasks(@PathVariable Date todayDate){
        return this.dailyTasksService.showDailyTasksByDate(todayDate);
    }
}
