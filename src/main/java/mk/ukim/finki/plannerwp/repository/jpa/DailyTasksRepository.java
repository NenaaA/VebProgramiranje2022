package mk.ukim.finki.plannerwp.repository.jpa;

import mk.ukim.finki.plannerwp.model.DailyTasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface DailyTasksRepository extends JpaRepository<DailyTasks, Date> {

    //ne e bash vaka vo auditoriskata
//Optional<Task>
  //  List<Optional<Task>> findTasksByPriority (Priority priority);
    Optional<DailyTasks> findAllByDate(Date date);

}
