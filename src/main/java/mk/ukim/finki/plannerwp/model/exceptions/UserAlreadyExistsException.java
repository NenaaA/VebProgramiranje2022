package mk.ukim.finki.plannerwp.model.exceptions;


public class UserAlreadyExistsException extends RuntimeException {

    public UserAlreadyExistsException(String username) {
        super(String.format("Username %s already exists", username));
    }
}
