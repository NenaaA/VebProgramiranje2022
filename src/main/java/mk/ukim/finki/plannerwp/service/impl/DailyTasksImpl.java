package mk.ukim.finki.plannerwp.service.impl;

import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.exceptions.DailyTasksNotFoundException;
import mk.ukim.finki.plannerwp.repository.jpa.DailyTasksRepository;
import mk.ukim.finki.plannerwp.service.DailyTasksService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DailyTasksImpl implements DailyTasksService {

    private final DailyTasksRepository dailyTasksRepository;

    public DailyTasksImpl(DailyTasksRepository dailyTasksRepository) {
        this.dailyTasksRepository = dailyTasksRepository;
    }

    @Override
    public List<Task> showDailyTasksByDate(Date date) {
        if(!this.dailyTasksRepository.findById(date).isPresent())
            throw new DailyTasksNotFoundException(date);
        return this.dailyTasksRepository.findAllByDate(date).get().getTaskList();
    }


}
