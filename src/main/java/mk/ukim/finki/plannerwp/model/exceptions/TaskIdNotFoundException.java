package mk.ukim.finki.plannerwp.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class TaskIdNotFoundException extends RuntimeException {

    public TaskIdNotFoundException(Long id) {
        super(String.format("Task with id %l doesn't exist", id));
    }
}
