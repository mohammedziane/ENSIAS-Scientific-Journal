package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.*;
import com.example.demo.repository.Comment_Repository;
import com.example.demo.repository.Poste_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.CommentSummary;

@RestController
@RequestMapping("/api")
public class CommentController {
	@Autowired
	Poste_Repository posteRepository;
	@Autowired
	Comment_Repository commentRepository;
	@Autowired
	User_Repository userRepository;
	@PostMapping("/postes/comment/{id_poste}/{username}")
	public ResponseEntity<?> addComment(@PathVariable("id_poste") Long id_poste,@PathVariable("username") String username,@RequestBody CommentSummary commentSummary){
		User user = userRepository.findByUsername(username);
		Poste poste = posteRepository.findPosteById(id_poste);
		Comment comment = new Comment(commentSummary.getName(),commentSummary.getText(),user,poste,commentSummary.getDate());
		Comment result = commentRepository.save(comment);
		CommentSummary envoye = new CommentSummary(result.getIdCommen(),id_poste,username,result.getText(),result.getDate());
		return ResponseEntity.ok(envoye);
	}
	@GetMapping("/postes/getposte/{id_poste}")
	public List<Long> getAllComments(@PathVariable("id_poste") Long id_poste){
		Poste poste = posteRepository.getOne(id_poste);
		return commentRepository.findCommentsByPoste(poste);
	}
	@GetMapping("/comments/{id}")
	public ResponseEntity<?> getComment(@PathVariable("id") Long id){
		if(commentRepository.existsById(id)) {
		Comment comment = commentRepository.findByCommentId(id);
		Poste poste = comment.getPoste();
		CommentSummary envoye = new CommentSummary(comment.getIdCommen(),poste.getId_poste(),comment.getName(),comment.getText(),comment.getDate());
		return ResponseEntity.ok(envoye);
		}
		return ResponseEntity.ok("Aucun commentaires pour ce poste! Commenter...");
	}
}
