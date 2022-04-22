package mk.ukim.finki.plannerwp.service;

import mk.ukim.finki.plannerwp.model.UserAccount;

public interface AuthenticationService {
    UserAccount login(String username, String password);
}
