package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DailyTasksImpl implements DailyTasksService {
    @Override
    public List<Task> showTasks(Date date) {
        return null;
    }

}
