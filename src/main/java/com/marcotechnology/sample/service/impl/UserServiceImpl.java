package com.marcotechnology.sample.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcotechlogy.sample.pojo.User;
import com.marcotechnology.sample.dao.UserDao;
import com.marcotechnology.sample.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired 
	private UserDao userDao;
	
	@Override
	public int add(User user) throws Exception {
		// TODO Auto-generated method stub
		return userDao.add(user);
	}

	@Override
	public int update(User user) throws Exception {
		// TODO Auto-generated method stub
		return userDao.update(user);
	}

	@Override
	public int delete(User user) throws Exception {
		// TODO Auto-generated method stub
		return userDao.delete(user);
	}

	@Override
	public List<User> selete() throws Exception {
		// TODO Auto-generated method stub
		return userDao.selete();
	}

	@Override
	public User searchByUsername(String username) throws Exception {
		// TODO Auto-generated method stub
		return userDao.searchByUsername(username);
	}

}
