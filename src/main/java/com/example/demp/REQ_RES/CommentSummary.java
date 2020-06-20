package com.example.demp.REQ_RES;

import java.util.Date;


public class CommentSummary {
	private String name;
	private String text;
	private Date date;
	public CommentSummary(String name, String text, Date date) {
		super();
		this.name = name;
		this.text = text;
		this.date = date;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
