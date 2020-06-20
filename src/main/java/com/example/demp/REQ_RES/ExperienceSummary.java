package com.example.demp.REQ_RES;
import java.util.Date;

public class ExperienceSummary {
	private long id_experience;
	private String title;
	private String company;
	private String location;
	private Date from;
    private Date to;
	private boolean current;
	private String description;
	public ExperienceSummary(long id_experience,String title, String company, String location, Date from, Date to, boolean current,String description) {
		super();
		this.id_experience = id_experience;
		this.title = title;
		this.company = company;
		this.location = location;
		this.from = from;
		this.to = to;
		this.current = current;
		this.description = description;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
}
