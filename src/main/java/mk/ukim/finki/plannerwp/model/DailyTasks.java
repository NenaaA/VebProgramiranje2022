package mk.ukim.finki.plannerwp.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class DailyTasks {

    @Id
    private Date date;

    @OneToMany
    private List<Task> taskList;

    public DailyTasks(Date date, List<Task> taskList) {
        this.date = date;
        this.taskList = new ArrayList<>();
    }


    public DailyTasks() {}
}
