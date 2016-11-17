package com.marcotechnology.sample.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class SqlConnection {
	private Connection con = null; 
	public SqlConnection() {
		try {
			
			String url = "jdbc:sqlserver://localhost:1433; databaseName=login";
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			 con = DriverManager.getConnection(url,"sa","1234");
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	public Statement createStatement() {
		Statement myStmt = null;
		try {
			myStmt = con.createStatement();
		} catch (SQLException e) { 
			e.printStackTrace();
		}
		return myStmt;
	}
	public void close(){
		try {
			con.close();
		} catch (SQLException e) { 
			e.printStackTrace();
		}
	}
}
