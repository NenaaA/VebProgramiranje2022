package mk.ukim.finki.plannerwp.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;


@Data
@Entity
public class UserAccount {

    @Id
    private String username;
    private String password;
    private String name;
    private String surname;
    private Date dateOfBirth;
    private String email;

    public UserAccount() {
    }

    public UserAccount(String username, String password, String name, String surname, Date dateOfBirth, String email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }

}
