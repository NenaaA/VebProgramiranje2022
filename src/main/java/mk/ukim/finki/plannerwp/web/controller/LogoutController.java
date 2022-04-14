package mk.ukim.finki.plannerwp.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/logout")
@CrossOrigin(origins = "http://localhost:3000")
public class LogoutController {

    @GetMapping
    public String logout() {
        return "logout";
    }
}
