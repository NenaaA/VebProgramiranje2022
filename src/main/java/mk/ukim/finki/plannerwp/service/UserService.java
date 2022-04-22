package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.UserAccount;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Date;

public interface UserService extends UserDetailsService {

   // UserAccount login(String username, String password);
    UserAccount register(String username, String password, String repeatPassword, String name, String surname, Date dateOfBirth, String email);
}
