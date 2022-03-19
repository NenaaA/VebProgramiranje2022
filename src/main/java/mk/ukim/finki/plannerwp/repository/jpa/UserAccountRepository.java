package mk.ukim.finki.plannerwp.repository.jpa;

import mk.ukim.finki.plannerwp.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, String> {
    Optional<UserAccount> findByUsername(String username);
    Optional<UserAccount> findByUsernameAndPassword(String username, String password);
}
