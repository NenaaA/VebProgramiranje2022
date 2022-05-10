package mk.ukim.finki.plannerwp.web.controller;

import mk.ukim.finki.plannerwp.model.exceptions.InvalidArgumentException;
import mk.ukim.finki.plannerwp.model.exceptions.PasswordsDoNotMatchException;
import mk.ukim.finki.plannerwp.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = "http://localhost:3000")
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
                           @RequestParam String dateOfBirth,
                           @RequestParam String email){

        Date newDate = null;
        try {
            newDate = new SimpleDateFormat("dd/MM/yyyy").parse(dateOfBirth);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        try{
            this.userService.register(username, password, repeatPassword, name, surname, newDate, email);
            return "redirect:/login";
        } catch (PasswordsDoNotMatchException | InvalidArgumentException exception){
            return "redirect:/register?error=" + exception.getMessage();
        }
    }
}
