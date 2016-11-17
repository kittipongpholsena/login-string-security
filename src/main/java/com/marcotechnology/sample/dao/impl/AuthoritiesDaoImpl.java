package com.marcotechnology.sample.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.marcotechlogy.sample.pojo.Authorities;

import com.marcotechnology.sample.dao.AuthoritiesDao;


@Repository
public class AuthoritiesDaoImpl implements AuthoritiesDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public int add(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(Authorities authorities) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Authorities> selete() throws Exception {

		return null;
	}

	@Override
	public List<Authorities> searchByUsername(String username) throws Exception {
		
		try {

			String sql = "SELECT username, authority FROM authorities WHERE username = ?";
		
			return jdbcTemplate.query(sql, new Object[]{username}, new AuthoritiesMapper());

	    } catch (EmptyResultDataAccessException e) { 

	        return null; 
	    }
	
	}
	
	static class AuthoritiesMapper implements RowMapper<Authorities> {

		@Override
		public Authorities mapRow(ResultSet rs, int rowNum) throws SQLException {

			Authorities authorities = new Authorities();
			
			authorities.setUsername(rs.getString("username"));
			authorities.setAuthori(rs.getString("authority"));
	
			return authorities;
		}
	


	}
}
