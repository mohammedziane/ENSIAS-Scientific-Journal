package com.example.demo.models;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name="user_login")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_user;
	@NotBlank
	@Size(max =15)
	private String username;
	
	@NotBlank
	private String password;
	@NotBlank
	private String email;
	@OneToMany(mappedBy="user")
	private List<Experience> experiences;
	@OneToMany(mappedBy="user")
	private List<Education> educations;
	@OneToMany(mappedBy="user")
	private List<Poste> postes;
	public List<Poste> getPostes() {
		return postes;
	}
	public void setPostes(List<Poste> postes) {
		this.postes = postes;
	}
	public List<Education> getEducations() {
		return educations;
	}
	public void setEducations(List<Education> educations) {
		this.educations = educations;
	}
	public List<Experience> getExperiences() {
		return experiences;
	}
	public void setExperiences(List<Experience> experiences) {
		this.experiences = experiences;
	}
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, optional = false)
    private Profile profile;
	
	public User() {
		super();
	}
	public User(String username, String password , String email) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
	}
	public long getId_user() {
		return id_user;
	}
	public void setId_user(long id_user) {
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
	public Profile getProfile() {
		return profile;
	}
	   public void setProfile(Profile profile) {
	        if (profile == null) {
	            if (this.profile != null) {
	                this.profile.setUser(null);
	            }
	        }
	        else {
	            profile.setUser(this);
	        }
	        this.profile = profile;
	    }
	
}
