package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.UserAccount;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/dailyTasks")
public class DailyTasksController {

    private final DailyTasksService dailyTasksService;

    public DailyTasksController(DailyTasksService dailyTasksService) {
        this.dailyTasksService = dailyTasksService;
    }

    @PostMapping("/taskForm") //ke vidime pokasno za ova dole
    public String addProductToShoppingCart(@PathVariable Long id, HttpServletRequest request) {
        try {
            UserAccount userAccount = (UserAccount) request.getSession().getAttribute("user");
//            DailyTasks dailyTasks = this.dailyTasksService.addTaskToDailyTasks();
                    return "redirect:/dailyTasks";
        } catch (RuntimeException exception) {
            return "redirect:/dailyTasks?error=" + exception.getMessage();
        }
    }
}
