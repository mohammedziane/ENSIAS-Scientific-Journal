package com.example.demp.REQ_RES;

import java.util.Date;


public class CommentSummary {
	private Long id_poste;
	private Long id_comment;
	private String name;
	private String text;
	private Date date;
	public CommentSummary(Long id_comment,Long id_poste,String name, String text, Date date) {
		super();
		this.id_comment=id_comment;
		this.id_poste=this.id_poste;
		this.name = name;
		this.text = text;
		this.date = date;
	}
	public Long getIdComment() {
		return id_comment;
	}
	public void setIdComment(Long id_comment) {
		this.id_comment=id_comment;
	}
	public Long getIdPoste() {
		return id_poste;
	}
	public void setIdPoste(Long id_poste) {
		this.id_poste=id_poste;
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
