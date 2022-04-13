package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/dailyTasks")
@CrossOrigin(origins = "http://localhost:3000")
public class DailyTasksController {

    private final DailyTasksService dailyTasksService;

    public DailyTasksController(DailyTasksService dailyTasksService) {
        this.dailyTasksService = dailyTasksService;
    }

    @GetMapping
    public String getTasksPage() {
        return "dailyTasks";
    }


//    @GetMapping
//    public String getDailyTasks(@RequestParam(required = false) String error,
//                                @RequestParam Date todayDate,
//                                Model model){
//        if(error != null && !error.isEmpty()){
//            model.addAttribute("hasError", true);
//            model.addAttribute("error", error);
//        }
//        Optional<DailyTasks> dailyTasks = this.dailyTasksService.showTasks(todayDate);
//        model.addAttribute("dailyTasks", dailyTasks);
//        return "dailyTasks";
//    }

//    @PostMapping("/taskForm") //ke vidime pokasno za ova dole // mozno e da ne treba voopsto
//    public String addProductToShoppingCart(@PathVariable Long id, HttpServletRequest request) {
//        try {
//            UserAccount userAccount = (UserAccount) request.getSession().getAttribute("user");
////            DailyTasks dailyTasks = this.dailyTasksService.addTaskToDailyTasks();
//                    return "redirect:/dailyTasks";
//        } catch (RuntimeException exception) {
//            return "redirect:/dailyTasks?error=" + exception.getMessage();
//        }
//    }
}
