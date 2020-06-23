package com.example.demo.repository;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Poste;
import com.example.demo.models.User;

public interface Poste_Repository extends JpaRepository<Poste , Long>{
	@Query("select id_poste from Poste")
	List<Long> findAllIdPostes();
	@Query("select nbr_likes from Poste where id_poste = :id_poste")
	Long getNbr_likes(@Param("id_poste") Long id_poste);
	@Modifying
	@Query("update Poste p set p.nbr_likes = :nbr_likes where p.id_poste = :id_poste")
	void updateLike(@Param("nbr_likes") Long nbr_likes ,@Param("id_poste") Long id_poste);
	@Query("select pos from Poste pos where pos.id_poste = :id_poste")
	Poste findPosteById(@Param("id_poste") Long id_poste);
	@Query(value="select id_poste, text, name, nbr_likes, date  from Poste ", nativeQuery =true)
	ArrayList<String> SelectPostes();
	@Query(value="select id_poste, text, name, nbr_likes, date  from Poste pos where pos.id_poste = :id_poste",nativeQuery=true)
	ArrayList<String> SelectPosteById(@Param("id_poste") Long id_poste);
}