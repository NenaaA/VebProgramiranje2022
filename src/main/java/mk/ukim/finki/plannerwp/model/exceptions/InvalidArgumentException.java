package mk.ukim.finki.plannerwp.model.exceptions;

public class InvalidArgumentException extends RuntimeException {

    public InvalidArgumentException() {
        super("Argument is not valid");
    }
}
