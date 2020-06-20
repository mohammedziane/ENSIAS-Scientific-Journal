package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.Comment;


public interface Comment_Repository extends JpaRepository<Comment , Long>{
	@Query("select cm from Comment cm where cm.poste = :id_poste")
	List<Comment> findCommentsByPoste(@Param("id_poste") Long id_poste);
}