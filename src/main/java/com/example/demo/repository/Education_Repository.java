package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Education;
import com.example.demo.models.Poste;
import com.example.demo.models.User;

public interface Education_Repository extends JpaRepository<Education , Long>{
	@Query("select id_education from Education exp where exp.user = :user ")
	List<Long> findAllIdEducation(@Param("user") User user);
	@Query("select edu from Education edu where edu.id_education = :id_education")
	Education findEducationById(@Param("id_education") Long id_education);
	@Query(value ="select * from Education exp where exp.user = :user",nativeQuery = true)
	List<Education> findEducationsById(@Param("user") User user);
}