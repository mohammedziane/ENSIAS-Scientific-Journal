package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Comment;
import com.example.demo.models.Poste;


public interface Comment_Repository extends JpaRepository<Comment , Long>{
	@Query("select id_comment from Comment cm where cm.poste = :poste")
	List<Long> findCommentsByPoste(@Param("poste") Poste poste);
	@Query(value="select * from Comment cm where cm.id_comment = :id_comment", nativeQuery =true)
	Comment findByCommentId(@Param("id_comment") Long id_comment);
	@Query("select id_comment, text, name, date from Comment cm  where cm.poste = :poste")
	ArrayList<String> SelectCommentsByPoste(@Param("poste") Poste poste);
}