package com.example.demo1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name="login")
public class Login {
	
	@Id
	private String userId;
	private String password;
	
	public Login() {
	}

	public Login(String userId, String password) {
		this.userId = userId;
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
