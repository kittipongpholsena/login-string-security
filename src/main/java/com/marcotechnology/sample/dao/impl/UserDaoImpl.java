package com.marcotechnology.sample.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.marcotechlogy.sample.pojo.User;
import com.marcotechnology.sample.dao.UserDao;

@Repository
public class UserDaoImpl implements UserDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public int add(User user) throws Exception {
		// TODO Auto-generated method stub
	
		return 0;
	}

	@Override
	public int update(User user) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(User user) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<User> selete() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User searchByUsername(String username) throws Exception {
		
		try {

				String sql = "SELECT username, password, enabled FROM users WHERE username = ?";
			
				return jdbcTemplate.queryForObject(sql, new Object[]{username}, new UserMapper());

		    } catch (EmptyResultDataAccessException e) { 

		        return null; 
		    }
		
	}

	//set to pojo
	static class UserMapper implements RowMapper<User> {

		@Override
		public User mapRow(ResultSet rs, int rowNum) throws SQLException {

			User user = new User();
			user.setUsername(rs.getString("username"));
			user.setPassword(rs.getString("password"));
			user.setEnabled(rs.getInt("enabled"));
			
			return user;
		}

	}
	
}
