package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.*;

public interface Experience_Repository extends JpaRepository<Experience , Long>{
	@Query("select id_experience from Experience exp where exp.user = :user ")
	List<Long> findAllIdExperience(@Param("user") User user);
	@Query("select exp from Experience exp where exp.id_experience = :id_experience")
	Experience findExperienceById(@Param("id_experience") Long id_experience);
	@Query(value ="select * from Experience exp where exp.user = :id_user",nativeQuery = true)
	List<Experience> findExperiencesById(@Param("id_user") Long id_user);
	@Query("select id_experience,company, title, location, current_exp, to_date, from_date, description from Experience exp  where exp.user = :user")
	ArrayList<String> SelectExperiencessById(@Param("user") User user);
}