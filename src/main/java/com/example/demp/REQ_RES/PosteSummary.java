package com.example.demp.REQ_RES;

import java.util.Date;
import java.util.List;

import com.example.demo.models.Comment;

public class PosteSummary {

	private Long id_poste;
	private String name;
	private String text;
	private List<Comment> comments;
	private Long nbr_likes;
	private Date date;
	public PosteSummary(Long id_poste,String name, String text,List<Comment> comments, Long nbr_likes, Date date) {
		super();
		this.id_poste = id_poste;
		this.name = name;
		this.text = text;
		this.comments=comments;
		this.nbr_likes = nbr_likes;
		this.date = date;
	}
	public List<Comment> getComments(){
		return this.comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments=comments;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getId_poste() {
		return id_poste;
	}
	public void setId_poste(Long id_poste) {
		this.id_poste = id_poste;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Long getNbr_likes() {
		return nbr_likes;
	}
	public void setNbr_likes(Long nbr_likes) {
		this.nbr_likes = nbr_likes;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
