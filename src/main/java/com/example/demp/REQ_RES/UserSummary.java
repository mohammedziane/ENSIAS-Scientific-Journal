package com.example.demp.REQ_RES;

public class UserSummary {
	private long id_user;
	private String email;
	private String username;
	public UserSummary(long id_user, String email,String username) {
		this.id_user = id_user;
		this.email = email;
		this.username = username;
	}
	public long getId_user() {
		return id_user;
	}
	public void setId_user(long id_user) {
		this.id_user = id_user;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
