package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Education;

public interface Education_Repository extends JpaRepository<Education , Long>{
	@Query(value ="select * from Education where exp.user = :id_user",nativeQuery = true)
	List<Education> findEducationsById(@Param("id_user") Long id_user);
}
