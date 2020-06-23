package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.*;

public interface Like_Repository extends JpaRepository<Likes , Long>{
	@Query("select id_like,name  from Likes exp  where exp.id_poste = :id_poste")
	ArrayList<String> SelectLikesByIdPoste(@Param("id_poste") Long id_poste);
	@Query(value="select * from Likes exp  where exp.name = :name and exp.id_poste = :id_poste",nativeQuery=true)
	Likes getLike(@Param("name") String name,@Param("id_poste") Long id_poste);
}
