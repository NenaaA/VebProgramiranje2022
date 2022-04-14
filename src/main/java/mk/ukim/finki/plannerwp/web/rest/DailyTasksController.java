package mk.ukim.finki.plannerwp.web.rest;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/dailyTasks")
@CrossOrigin(origins = "http://localhost:3000")
public class DailyTasksController {

    private final DailyTasksService dailyTasksService;

    public DailyTasksController(DailyTasksService dailyTasksService) {
        this.dailyTasksService = dailyTasksService;
    }

    @GetMapping("/date/{todayDate}")
    public Optional<DailyTasks> getDailyTasks(@PathVariable Date todayDate){
        return this.dailyTasksService.showTasks(todayDate);
    }
}
