package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;


@Entity
@Table(name="profile")
public class Profile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_profile;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user")
    @NotNull
    private User user;
    @NotBlank(message = "gender is required")
	private String gender;
	private String company;
	private String website;
	private String location;
	@NotBlank(message = "Status is required")
	private String status;
	private String skills ;
	private String github ;
	private String bio;
	@Temporal(TemporalType.DATE)
	@CreatedDate
	@JsonFormat(pattern = "yyyy-mm-dd")
    private Date date;
	@LastModifiedDate
	@JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;
    
    
    
	public Profile() {
		super();
	}
	public Profile(User user,String gender,String company, String website  , String location, String status, String skills,String github, String bio ) {
		super();
		this.user=user;
		this.gender=gender;
		this.company = company;
		this.website = website;
		this.location=location;
		this.status=status;
		this.skills=skills;
		this.github=github;
		this.bio=bio;
	}
	public User getUser() {
		return user;
	}
	public long getIdProfile() {
		return id_profile;
	}
	public String getGender() {
		return gender;
	}
	public String getCompany() {
		return company;
	}
	public String getWebsite() {
		return website;
	}
	public String getLocation() {
		return location;
	}
	public String getStatus() {
		return status;
	}
	public String getSkills() {
		return skills;
	}
	public String getBio() {
		return bio;
	}
	public Date getDate() {
		return date;
	}
	public String getGithub() {
		return github;
	}
	public Date getUpdatedAt() {
		return updated_At;
	}
	public void setUser(User user) {
		this.user=user;
	}
	public void setGithub(String github) {
		this.github=github;
	}
	public void setId(long id_profile) {
		this.id_profile=id_profile;
	}
	public void setGender(String gender) {
		this.gender=gender;
	}
	public void setCompany(String company) {
		this.company=company;
	}
	public void setWebsite(String website) {
		this.website=website;
	}
	public void setLocation(String location) {
		this.location=location;
	}
	public void setStatus(String status) {
		this.status=status;
	}
	public void setSkills(String skills) {
		this.skills=skills;
	}
	public void setBio(String bio) {
		this.bio=bio;
	}
	public void setDate(Date date) {
		this.date=date;
	}
	public void setUpdatedAt(Date updated_at) {
		this.updated_At=updated_at;
	}


	
	
}