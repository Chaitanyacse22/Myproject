package com.example.demo1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDAO {
	
	@Autowired
	LoginRepository loginRepo;
	
	public List<Login> getAllUsers()
	{
		return loginRepo.findAll();
	}
	
	public String insertUsersRecord(Login loginObj)
	{
		 loginRepo.save(loginObj);
		 
		 return "Record Inserted in the DB Successfully";
	}
	
	public String updateUserData(Login loginObj)
	{
		 loginRepo.save(loginObj);
		 
		 return "Record Updated in the DB Successfully";
	}
	
	public String deleteRecord(String userId)
	{
		 loginRepo.deleteById(userId);
		 
		 return "Given record is deleted successfully";
	}

}
