package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.models.*;

public interface Experience_Repository extends JpaRepository<Experience , Long>{
	//@Query("select e from experience where e.user = :user")
	//List<Experience> findExperiencesByUser(@Param("user") User user);
}