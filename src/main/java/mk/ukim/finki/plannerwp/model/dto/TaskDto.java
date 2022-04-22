package mk.ukim.finki.plannerwp.model.dto;

import lombok.Data;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import java.util.Date;

@Data
public class TaskDto {

    private String taskName;
    private String description;
    private String date; //moze i da treba se smeni vo Date date
    private Priority priority;
    private boolean status;

    public TaskDto() {
    }

    public TaskDto(String taskName, String description, String date, Priority priority, boolean status) {
        this.taskName = taskName;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = status;
    }
}
