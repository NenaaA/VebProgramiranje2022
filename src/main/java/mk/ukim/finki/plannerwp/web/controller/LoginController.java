package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.UserAccount;
import mk.ukim.finki.plannerwp.model.exceptions.InvalidUserCredentialsException;
import mk.ukim.finki.plannerwp.service.UserService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getLoginPage(Model model) {
        return "login";
    }

    @PostMapping
    public String login(HttpServletRequest request, Model model) {
        UserAccount userAccount = null;
        try {
//            userAccount = this.userService.login(request.getParameter("username"),
//                    request.getParameter("password"));
            request.getSession().setAttribute("user", userAccount);
            return "redirect:/home";
        } catch (InvalidUserCredentialsException exception) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", exception.getMessage());
            return "login";
        }

    }

}


