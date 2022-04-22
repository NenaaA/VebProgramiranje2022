package mk.ukim.finki.plannerwp.repository.jpa;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import mk.ukim.finki.plannerwp.model.Task;
import mk.ukim.finki.plannerwp.model.enumerations.Priority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface DailyTasksRepository extends JpaRepository<DailyTasks, Date> {

    //ne e bash vaka vo auditoriskata
//Optional<Task>
  //  List<Optional<Task>> findTasksByPriority (Priority priority);

}
