package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Education;
import com.example.demo.models.User;

public interface Education_Repository extends JpaRepository<Education , Long>{
	//@Query("select e from education where e.user = :user")
	//List<Education> findEducationsByUser(@Param("user") User user);
}
