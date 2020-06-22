package com.example.demp.REQ_RES;

import java.util.Date;


public class EducationSummary {
	private long id_education;
	private String school;
	private String degree;
	private String fieldofstudy;
	private Date from;
	private Date to;
	private boolean current;
	private String description;
	public EducationSummary(long id_education, String school, String degree, String fieldofstudy, Date from, Date to,
			boolean current, String description) {
		super();
		this.id_education = id_education;
		this.school = school;
		this.degree = degree;
		this.fieldofstudy = fieldofstudy;
		this.from = from;
		this.to = to;
		this.current = current;
		this.description = description;
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
		return from;
	}
	public void setFrom(Date from) {
		this.from = from;
	}
	public Date getTo() {
		return to;
	}
	public void setTo(Date to) {
		this.to = to;
	}
	public boolean isCurrent() {
		return current;
	}
	public void setCurrent(boolean current) {
		this.current = current;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
