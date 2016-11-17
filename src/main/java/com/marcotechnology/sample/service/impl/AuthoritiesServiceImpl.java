package com.marcotechnology.sample.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcotechlogy.sample.pojo.Authorities;
import com.marcotechnology.sample.dao.AuthoritiesDao;
import com.marcotechnology.sample.service.AuthoritiesService;

@Service
public class AuthoritiesServiceImpl implements AuthoritiesService{

	@Autowired
	private AuthoritiesDao authoritiesDao;
	
	
	@Override
	public int add(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return authoritiesDao.add(authorities);
	}

	@Override
	public int update(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return authoritiesDao.update(authorities);
	}

	@Override
	public int delete(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return authoritiesDao.delete(authorities);
	}

	@Override
	public List<Authorities> selete() throws Exception {
		// TODO Auto-generated method stub
		return authoritiesDao.selete();
	}

	@Override
	public List<Authorities> searchByUsername(String username) throws Exception {
		// TODO Auto-generated method stub
		return authoritiesDao.searchByUsername(username);
	}

}
