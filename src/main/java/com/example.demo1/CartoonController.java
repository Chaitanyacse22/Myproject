package com.example.demo1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin (origins="http://localhost:4200")
@RestController
public class CartoonController {

	public CartoonController() {
		
	}
	
	@Autowired
	CartoonDAO carDao;
	
	@GetMapping("/getAllCartoons")
	public List<Cartoon> getAllCartoons()
	{
		return carDao.getAllCartoons();
	}
	
	@PostMapping("/insertCartoonRecord")
	public String insertCartoonRecord(@RequestBody Cartoon carObj)
	{
		return carDao.insertCarinsertCartoonRecord(carObj);
	}
	
	@PutMapping("/updateCartoonData")
	public String updateCartoonRecord(@RequestBody Cartoon carObj)
	{
		return carDao.updateCartoonData(carObj);
	}
	
	@DeleteMapping("/deleteRecord/{id}")
	public String deleteRecord(@PathVariable int id)
	{
		return carDao.deleteRecord(id);
	}
	

}
