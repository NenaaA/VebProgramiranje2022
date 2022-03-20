package mk.ukim.finki.plannerwp.model.exceptions;

public class PasswordsDoNotMatchException extends RuntimeException{
    public PasswordsDoNotMatchException() { super("Passwords do not match"); }
}
