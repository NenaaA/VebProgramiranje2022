package mk.ukim.finki.plannerwp.model.dto;

import lombok.Data;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;

import java.util.Date;

@Data
public class TaskDto {

    private String taskName;
    private String description;
    private String date;
    private Integer priority;
    private boolean completed;

    public TaskDto() {
    }

    public TaskDto(String taskName, String description, String date, Integer priority, boolean completed) {
        this.taskName = taskName;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = completed;
    }
}
