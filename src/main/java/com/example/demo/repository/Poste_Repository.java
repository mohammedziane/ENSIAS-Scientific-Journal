package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Poste;

public interface Poste_Repository extends JpaRepository<Poste , Long>{
	@Query("select * from poste")
	List<Poste> findAll();
	@Query("select * from poste where id_poste= :id_poste")
	Poste findPosteById(@Param("id_poste") Long id_poste);
	@Query("delete from poste where id_poste= :id_poste")
	void deleteById(@Param("id_poste") Long id_poste);
	@Query("update poste p  set p.nbr_likes = :nbr_likes where p.id_poste = :id_poste")
	void SetLike(Long nbr_likes , Long id_poste);
}