package com.marcotechlogy.sample.pojo;

import java.io.Serializable;

public class Authorities implements Serializable {

	private static final long serialVersionUID = -7158400168585128697L;
	private String username;
	private String authori;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAuthori() {
		return authori;
	}
	public void setAuthori(String authori) {
		this.authori = authori;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
