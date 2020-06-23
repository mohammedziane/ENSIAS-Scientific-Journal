package com.example.demo.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="comment")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_comment;
	private String name;
	private String text;
	@OneToOne
	@JoinColumn(name="user")
	private User user;
	@ManyToOne
	private Poste poste;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date date;
	public Comment() {
		super();
	}
	public Comment(String name, String text, User user, Poste poste, Date date) {
		super();
		this.name = name;
		this.text = text;
		this.user = user;
		this.poste = poste;
		this.date = date;
	}
	public Long getIdCommen() {
		return id_comment;
	}
	public void setIdComment(Long id_comment) {
		this.id_comment=id_comment;
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Poste getPoste() {
		return poste;
	}
	public void setPoste(Poste poste) {
		this.poste = poste;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
