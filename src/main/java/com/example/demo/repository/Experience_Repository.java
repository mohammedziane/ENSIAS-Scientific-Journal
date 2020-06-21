package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.*;

public interface Experience_Repository extends JpaRepository<Experience , Long>{
	@Query(value ="select * from Experience exp where exp.user = :id_user",nativeQuery = true)
	List<Experience> findExperiencesById(@Param("id_user") Long id_user);
}