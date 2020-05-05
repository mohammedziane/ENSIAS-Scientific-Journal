package com.example.demo.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserPrincipal implements UserDetails{

	private Long id_user;
	private String username;
	@JsonIgnore
	private String password;
	@JsonIgnore
	private String email;
	private Collection<? extends GrantedAuthority> authorities;
	public UserPrincipal(Long id_user,String username,String password,String email,Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id_user=id_user;
		this.username=username;
		this.password=password;
		this.email = email;
		this.authorities = authorities;
	}
	public static UserPrincipal create(User user) {
		return new UserPrincipal(user.getId_user(),user.getUsername(),user.getPassword(),user.getEmail(),null);
	}
	
	public Long getId_user() {
		return id_user;
	}

	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
