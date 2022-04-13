package mk.ukim.finki.plannerwp.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value={"/", "/home"})
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/home")
    public String getHomePage() {
        return "home";
    }

}
