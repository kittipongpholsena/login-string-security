package com.marcotechnology.sample.service;

import java.util.List;

import com.marcotechlogy.sample.pojo.Authorities;

public interface AuthoritiesService {

	public int add(Authorities authorities) throws Exception;
	public int update(Authorities authorities) throws Exception;
	public int delete(Authorities authorities) throws Exception;
	public List<Authorities> selete() throws Exception;
	public List<Authorities> searchByUsername( String username ) throws Exception;
}
