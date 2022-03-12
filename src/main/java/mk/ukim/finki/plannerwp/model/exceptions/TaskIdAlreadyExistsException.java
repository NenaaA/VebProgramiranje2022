package mk.ukim.finki.plannerwp.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PRECONDITION_FAILED)
public class TaskIdAlreadyExistsException extends RuntimeException {

    public TaskIdAlreadyExistsException(Long id) {
        super(String.format("Task with id %l already exists", id));
    }
}
