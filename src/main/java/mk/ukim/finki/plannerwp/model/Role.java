package mk.ukim.finki.plannerwp.model;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_ADMIN_OLYA,
    ROLE_ADMIN_NENA,

    ROLE_USER;


    @Override
    public String getAuthority() {
        return name();
    }
}
