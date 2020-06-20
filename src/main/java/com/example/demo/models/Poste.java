package com.example.demo.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="Poste")
public class Poste {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_poste;
	private String name;
	private String text;
	private Long nbr_likes;
	@ManyToOne
	private User user;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date date;
	@OneToMany(mappedBy="poste")
	private List<Comment> comments;
	public Poste() {
		super();
	}
	
	public Poste(Long id_poste,String name, String text, Long nbr_likes, User user, Date date,List<Comment> comments) {
		super();
		this.id_poste = id_poste;
		this.name = name;
		this.text = text;
		this.nbr_likes = nbr_likes;
		this.user = user;
		this.date = date;
		this.comments = comments;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
}
