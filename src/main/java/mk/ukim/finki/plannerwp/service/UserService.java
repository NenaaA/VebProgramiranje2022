package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.UserAccount;

import java.util.Date;

public interface UserService {

    UserAccount login(String username, String password);
    UserAccount register(String username, String password, String name, String surname, Date dateOfBirth, String email);
}
