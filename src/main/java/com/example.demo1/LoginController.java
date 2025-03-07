package com.example.demo1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins = "https://localhost:4200")
@RestController
public class LoginController {

	public LoginController() {
		
	}
	
	@Autowired
	LoginDAO loginDao;
	
	@GetMapping("/getAllUsers")
	public List<Login> getAllEmployees()
	{
		return loginDao.getAllUsers();
	}
	
	@PostMapping("/insertUsersRecord")
	public String insertEmployeeRecord(@RequestBody Login loginObj)
	{
		return loginDao.insertUsersRecord(loginObj);
	}
	
	@PutMapping("/updateUsersData")
	public String updateEmployeeRecord(@RequestBody Login loginObj)
	{
		return loginDao.updateUserData(loginObj);
	}
	
	@DeleteMapping("/delete/{userId}")
	public String deleteRecord(@PathVariable String userId)
	{
		return loginDao.deleteRecord(userId);
	}

}
