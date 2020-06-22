package com.example.demp.REQ_RES;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.example.demo.models.Education;
import com.example.demo.models.Experience;
import com.example.demo.models.User;

public class ProfileData {
	private long idprofile;
	private String skills ;
	private String bio;
	private Long id_user;
	private String username;
	private String gender;
	private String company;
	private String website;
	private String location;
	private String status;
	private ArrayList<String> id_educations;
	private ArrayList<String> id_experiences;
    
	public ProfileData(long id_profile,Long id_user,String gender,String company,String website,String location, String status,String username,String skills, String bio,ArrayList<String> id_educations, ArrayList<String> id_experiences ) {
		this.idprofile=id_profile;
		this.id_user=id_user;
		this.username=username;
		this.skills=skills;
		this.gender=gender;
		this.company=company;
		this.website=website;
		this.location=location;
		this.status=status;
		this.bio=bio;
		this.id_educations=id_educations;
		this.id_experiences=id_experiences;
	
	}

	public ArrayList<String> getIdEducations(){
		return id_educations;
	}
	public void setIdEducations(ArrayList<String> id_educations) {
		this.id_educations = id_educations;
	}
	public ArrayList<String> getIdExperiences(){
		return id_experiences;
	}
	public void setIdExperiences(ArrayList<String> id_experiences) {
		this.id_experiences = id_experiences;
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

	public String getBio() {
		return bio;
	}
	
	public void setId(long id_profile) {
		this.idprofile=id_profile;
	}
	public void setSkills(String skills) {
		this.skills=skills;
	}
	public void setBio(String bio) {
		this.bio=bio;
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
}