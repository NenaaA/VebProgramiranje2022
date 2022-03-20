package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.exceptions.InvalidArgumentException;
import mk.ukim.finki.plannerwp.model.exceptions.PasswordsDoNotMatchException;
import mk.ukim.finki.plannerwp.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;

@Controller
@RequestMapping("/register")
public class RegisterController {

    private final UserService userService;

    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getRegisterPage(@RequestParam(required = false) String error, Model model){
        if(error != null && !error.isEmpty()){
            model.addAttribute("hasError", true);
            model.addAttribute("error", error);
        }
        return "register";
    }

    @PostMapping
    public String register(@RequestParam String username,
                           @RequestParam String password,
                           @RequestParam String repeatPassword,
                           @RequestParam String name,
                           @RequestParam String surname,
                           @RequestParam Date dateOfBirth,
                           @RequestParam String email){
        try{
            this.userService.register(username, password, repeatPassword, name, surname, dateOfBirth, email);
            return "redirect:/login";
        } catch (PasswordsDoNotMatchException | InvalidArgumentException exception){
            return "redirect:/register?error=" + exception.getMessage();
        }
    }
}
