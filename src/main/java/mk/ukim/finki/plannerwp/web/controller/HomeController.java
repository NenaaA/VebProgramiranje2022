package mk.ukim.finki.plannerwp.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value={"/", "/home"})
public class HomeController {

    @GetMapping("/home")
    public String getHomePage() {
        return "home";
    }

}
