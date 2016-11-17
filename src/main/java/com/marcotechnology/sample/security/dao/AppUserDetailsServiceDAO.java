package com.marcotechnology.sample.security.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.google.gson.Gson;
import com.marcotechlogy.sample.pojo.Authorities;
import com.marcotechlogy.sample.pojo.User;
import com.marcotechnology.sample.service.AuthoritiesService;
import com.marcotechnology.sample.service.UserService;

public class AppUserDetailsServiceDAO implements UserDetailsService {

	@Autowired
	private UserService userService;

	@Autowired
	private AuthoritiesService authoritiesService;

	private User user = null;
	private List<Authorities> authorities = null;

	@Override
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {

		System.out.println(username);

		try {

			user = userService.searchByUsername(username);

			if (user == null) {

				System.out.println(username + " not found");

			} else {

				authorities = authoritiesService.searchByUsername(username);

			}

		} catch (Exception e) {

			e.printStackTrace();
		}

		return buildForAuthentication(user, authorities);
	}

	private UserDetails buildForAuthentication(User user,
			List<Authorities> authorities) {

		Collection<GrantedAuthority> auths = new ArrayList<GrantedAuthority>();

		System.out.println(new Gson().toJson(user));
		System.out.println(new Gson().toJson(authorities));

		if (authorities != null) {
			for (Authorities auth : authorities) {

				auths.add(new SimpleGrantedAuthority(auth.getAuthori()));

			}

		}
		return new UserDetailsApp(user, auths);
	}

}
