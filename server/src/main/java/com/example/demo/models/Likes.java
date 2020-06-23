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
@Table(name="likes")
public class Likes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_like;
	private String name;
	private Long id_poste;
	public Likes() {
		super();
	}
	
	public Likes(String name,  Long id_poste) {
		super();
		this.name = name;
		this.id_like = id_like;
		this.id_poste = id_poste;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId_Like() {
		return id_like;
	}
	public void setId_Like(Long id_like) {
		this.id_like = id_like;
	}
	public Long getId_Posye() {
		return id_poste;
	}
	public void setNbr_likes(Long id_poste) {
		this.id_poste = id_poste;
	}
	
}