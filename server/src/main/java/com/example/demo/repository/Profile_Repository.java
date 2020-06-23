  
package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.*;
public interface Profile_Repository extends JpaRepository<Profile , Long>{
	boolean existsByUser(User user);
	Optional<Profile> findById(Long id_profile);
	void deleteById(Long id_profile);
	@Query("select u from Profile u where u.id_profile = :id_profile")
    Profile findByIdProfile(@Param("id_profile") long id_profile);
	@Query("select id_profile from Profile")
	List<Long> findAllIdProfiles();
	@Query("select u from Profile u where u.user = :user")
    Profile findByUser(@Param("user") User user);
}