package mk.ukim.finki.plannerwp.model;

import lombok.Data;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import javax.persistence.*;
import java.util.Date;
import java.util.Random;


@Data
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    private String taskName;

    @Column(length = 2000)
    private String description;

    private Date date;

    private Priority priority;

    private boolean completed;


    public Task() {}

    public Task(String taskName, String description, Date date, Priority priority, boolean completed) {
        Random random = new Random();
        this.taskId = random.nextLong();

        this.taskName = taskName;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = completed;
    }

}
