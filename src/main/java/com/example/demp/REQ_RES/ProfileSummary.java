package com.example.demp.REQ_RES;

import java.util.Date;
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
    private Date date;
    private Date updated_At;
    
	public ProfileSummary(long id_profile,String gender,String company, String website  , String location, String status, String skills,String github, String bio, Date date,Date updated_At ) {
		this.idprofile=id_profile;
		this.gender=gender;
		this.company = company;
		this.website = website;
		this.location=location;
		this.status=status;
		this.skills=skills;
		this.bio=bio;
		this.github=github;
		this.date=date;
		this.updated_At=updated_At;
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
