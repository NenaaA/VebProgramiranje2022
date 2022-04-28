package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.UserAccount;
import mk.ukim.finki.plannerwp.model.exceptions.InvalidArgumentException;
import mk.ukim.finki.plannerwp.model.exceptions.InvalidUserCredentialsException;
import mk.ukim.finki.plannerwp.model.exceptions.PasswordsDoNotMatchException;
import mk.ukim.finki.plannerwp.model.exceptions.UserAlreadyExistsException;
import mk.ukim.finki.plannerwp.repository.jpa.UserAccountRepository;
import mk.ukim.finki.plannerwp.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    private final UserAccountRepository userAccountRepository;

    public UserServiceImpl(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserAccount login(String username, String password) {
        return null;
    }

    @Override
    public UserAccount register(String username, String password, String repeatPassword, String name, String surname, Date dateOfBirth, String email) {
        if(username == null || username.isEmpty() || password == null || password.isEmpty() || name == null || name.isEmpty()) { //TODO, check for email
            throw new InvalidArgumentException();
        }

        if(!password.equals(repeatPassword)){
            throw new PasswordsDoNotMatchException();
        }

        if(this.userAccountRepository.findByUsername(username).isPresent()) {
            throw new UserAlreadyExistsException(username);
        }

        UserAccount userAccount = new UserAccount(username, password, name, surname, dateOfBirth, email);
        return userAccountRepository.save(userAccount);

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return (UserDetails) userAccountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
