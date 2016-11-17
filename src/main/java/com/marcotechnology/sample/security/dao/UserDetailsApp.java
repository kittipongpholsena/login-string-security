package com.marcotechnology.sample.security.dao;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.marcotechlogy.sample.pojo.User;

public class UserDetailsApp implements UserDetails {
	
	private static final long serialVersionUID = 5946997792541794183L;
	
	private User user;
	private Collection<GrantedAuthority> grantedAuthorities;
	
	public UserDetailsApp(User user, Collection<GrantedAuthority> grantedAuthorities) {
		
		this.user = user;
		this.grantedAuthorities = grantedAuthorities;
		
	}

	@Override
	public String getPassword() {
		
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return user == null ? false : user.getEnabled() == 1;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return grantedAuthorities;
	}

}
