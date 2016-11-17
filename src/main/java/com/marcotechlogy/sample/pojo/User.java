package com.marcotechlogy.sample.pojo;

import java.io.Serializable;

public class User implements Serializable {
	

	private static final long serialVersionUID = 1552595382424774307L;
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	private String username;
	private String password;
	private Integer enabled;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getEnabled() {
		return enabled;
	}
	public void setEnabled(Integer enabled) {
		this.enabled = enabled;
	}

}
