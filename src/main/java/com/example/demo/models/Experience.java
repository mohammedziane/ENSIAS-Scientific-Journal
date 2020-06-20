package com.example.demo.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="experience")
public class Experience {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_experience;
	@NotBlank
	private String title;
	@NotBlank
	private String company;
	@NotBlank
	private String location;
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date from_date;
	@JsonFormat(pattern = "yyyy-mm-dd")
    private Date to_date;
	private boolean current_exp;
	private String description;
	@ManyToOne
	private User user;
	public Experience() {
		super();
	}
	public Experience(long id_experience,String title, String company, String location, Date from, Date to, boolean current,
			String description, User user) {
		super();
		this.id_experience = id_experience;
		this.company = company;
		this.location = location;
		this.from_date = from;
		this.to_date = to;
		this.current_exp = current;
		this.description = description;
		this.user = user;
		this.title = title;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public long getId_experience() {
		return id_experience;
	}
	public void setId_experience(long id_experience) {
		this.id_experience = id_experience;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Date getFrom() {
		return from_date;
	}
	public void setFrom(Date from) {
		this.from_date = from;
	}
	public Date getTo() {
		return to_date;
	}
	public void setTo(Date to) {
		this.to_date = to;
	}
	public boolean isCurrent() {
		return current_exp;
	}
	public void setCurrent(boolean current) {
		this.current_exp = current;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
