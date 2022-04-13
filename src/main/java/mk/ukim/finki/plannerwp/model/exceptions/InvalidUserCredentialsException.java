package mk.ukim.finki.plannerwp.model.exceptions;


public class InvalidUserCredentialsException extends RuntimeException {

    public InvalidUserCredentialsException() {
        super("Invalid credentials");
    }

}
