package mk.ukim.finki.plannerwp.repository.jpa;

import mk.ukim.finki.plannerwp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    void deleteById(Long id);
}
