package com.example.demp.REQ_RES;

import java.util.Date;
import java.util.List;

import com.example.demo.models.Education;
import com.example.demo.models.Experience;
import com.example.demo.models.User;

public class ProfileSummary {
	private long idprofile;
	private String gender;
	private String company;
	private String website;
	private String location;
	private String status;
	private String skills ;
	private String github;
	private String bio;
	private Long id_user;
	private String username;
	//private List<Education> educations;
	//private List<Experience> experiences;
    private Date date;
    private Date updated_At;
    
	public ProfileSummary(long id_profile,Long id_user,String username,String gender,String company, String website  , String location, String status, String skills,String github, String bio, Date date,Date updated_At ) {
		this.idprofile=id_profile;
		this.id_user=id_user;
		this.username=username;
		this.gender=gender;
		this.company = company;
		this.website = website;
		this.location=location;
		this.status=status;
		this.skills=skills;
		this.bio=bio;
		//this.educations=educations;
		//this.experiences=experiences;
		this.github=github;
		this.date=date;
		this.updated_At=updated_At;
	}

	public Long getIdUser() {
		return id_user;
	}
	public void setIdUser(Long id_user) {
		this.id_user=id_user;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	public long getIdProfile() {
		return idprofile;
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
	public String getGithub() {
		return github;
	}
	public String getBio() {
		return bio;
	}
	public Date getDate() {
		return date;
	}
	public Date getUpdatedAt() {
		return updated_At;
	}
	public void setId(long id_profile) {
		this.idprofile=id_profile;
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
	public void setGithub(String github) {
		this.github=github;
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
