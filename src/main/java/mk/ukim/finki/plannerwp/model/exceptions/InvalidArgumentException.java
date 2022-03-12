package mk.ukim.finki.plannerwp.model.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

public class InvalidArgumentException extends RuntimeException {

    public InvalidArgumentException() {
        super("Argument is not valid");
    }
}
