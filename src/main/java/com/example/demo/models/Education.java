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
@Table(name="education")
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_education;
	@NotBlank
	private String school;
	@NotBlank
	private String degree;
	@NotBlank
	private String fieldofstudy;
	@Temporal(TemporalType.DATE)
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date from_date;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date to_date;
	private boolean current_edu;
	private String description;
	@ManyToOne
	private User user;
	public Education() {
		super();
	}
	public Education(long id_education, @NotBlank String school, @NotBlank String degree, @NotBlank String fieldofstudy,
			Date from, Date to, boolean current, String description, User user) {
		super();
		this.id_education = id_education;
		this.school = school;
		this.degree = degree;
		this.fieldofstudy = fieldofstudy;
		this.from_date = from;
		this.to_date = to;
		this.current_edu = current;
		this.description = description;
		this.user = user;
	}
	public long getId_education() {
		return id_education;
	}
	public void setId_education(long id_education) {
		this.id_education = id_education;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getFieldofstudy() {
		return fieldofstudy;
	}
	public void setFieldofstudy(String fieldofstudy) {
		this.fieldofstudy = fieldofstudy;
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
		return current_edu;
	}
	public void setCurrent(boolean current) {
		this.current_edu = current;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
