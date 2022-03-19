package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import mk.ukim.finki.plannerwp.repository.jpa.DailyTasksRepository;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class DailyTasksImpl implements DailyTasksService {

    private final DailyTasksRepository dailyTasksRepository;

    public DailyTasksImpl(DailyTasksRepository dailyTasksRepository) {
        this.dailyTasksRepository = dailyTasksRepository;
    }

    @Override
    public Optional<DailyTasks> showTasks(Date date) {
        return this.dailyTasksRepository.findById(date);
    }

    @Override
    public void addTaskToDailyTasks(Long taskId, String taskName, String description, Date date, Priority priority, boolean status) {

    }

}
