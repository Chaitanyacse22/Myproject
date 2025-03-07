package com.example.demo1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CartoonDAO {
	
	@Autowired
	CartoonRepository carRepo;
	
	public List<Cartoon> getAllCartoons()
	{
		return carRepo.findAll();
	}
	
	public String insertCarinsertCartoonRecord(Cartoon carObj)
	{
		 carRepo.save(carObj);
		 
		 return "Record Inserted in the DB Successfully";
	}
	
	public String updateCartoonData(Cartoon carObj)
	{
		 carRepo.save(carObj);
		 
		 return "Record Updated in the DB Successfully";
	}
	
	public String deleteRecord(int carId)
	{
		 carRepo.deleteById(carId);
		 
		 return "Given record is deleted successfully";
	}

}
