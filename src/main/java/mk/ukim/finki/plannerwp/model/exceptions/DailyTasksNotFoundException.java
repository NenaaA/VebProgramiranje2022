package mk.ukim.finki.plannerwp.model.exceptions;

import java.util.Date;

public class DailyTasksNotFoundException extends RuntimeException{
    public DailyTasksNotFoundException(Date date) {
        super("There are no tasks to show for " + date);
    }
}
