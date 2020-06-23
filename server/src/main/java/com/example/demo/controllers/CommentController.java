package com.example.demo.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.example.demp.REQ_RES.PosteData;

@RestController
@RequestMapping("/api")
public class CommentController {
	@Autowired
	Poste_Repository posteRepository;
	@Autowired
	Comment_Repository commentRepository;
	@Autowired
	User_Repository userRepository;
	ArrayList<String> list;
	@PostMapping("/postes/comment/{id_poste}/{username}")
	public ArrayList<String> addComment(@PathVariable("id_poste") Long id_poste,@PathVariable("username") String username,@RequestBody CommentSummary commentSummary){
		User user = userRepository.findByUsername(username);
		Poste poste = posteRepository.findPosteById(id_poste);
		Comment comment = new Comment(username,commentSummary.getText(),user,poste,commentSummary.getDate());
		Comment result = commentRepository.save(comment);
		ArrayList<String> comments = commentRepository.SelectCommentsByPoste(poste);
		return comments;
	}
	@GetMapping("/postes/getpostes/{id_poste}")
	public ResponseEntity<?> getAllComments(@PathVariable("id_poste") Long id_poste){
		Poste poste = posteRepository.getOne(id_poste);
		ArrayList<String> comments = commentRepository.SelectCommentsByPoste(poste);
		if(comments != null) {
			PosteData data = new PosteData(id_poste,poste.getName(),poste.getText(),comments,poste.getNbr_likes(),poste.getDate());
			return ResponseEntity.ok(data);
		}
		return ResponseEntity.ok(new PosteData(poste.getId_poste(),poste.getName(),poste.getText(),list,poste.getNbr_likes(),poste.getDate())
);
	}
	
	@DeleteMapping("/comment/delete/{id_comment}")
	public ResponseEntity<?> deleteComment(@PathVariable("id_comment") Long id_comment){
		Comment comment = commentRepository.getOne(id_comment);
		commentRepository.delete(comment);
		String id = String.valueOf(id_comment);
		return ResponseEntity.ok(new ApiResponse(true,id));
	}
}
