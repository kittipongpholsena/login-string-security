package com.marcotechnology.sample.dao;

import java.util.List;


import com.marcotechlogy.sample.pojo.User;

public interface UserDao {
	
	public int add(User user) throws Exception;
	public int update(User user) throws Exception;
	public int delete(User user) throws Exception;
	public List<User> selete() throws Exception;
	public User searchByUsername( String username ) throws Exception;

}
